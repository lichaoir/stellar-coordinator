const util = require('util');
const assert = require('assert');
const request = require('supertest')('http://localhost:8000');
const expect = require('chai').expect;

function pollSession(redisGetAsync, sessionKey, callback, interval=1000, maxTries=10, timesTried=0) {
    return redisGetAsync(sessionKey)
      .then((session) => JSON.parse(session))
      .then(callback)
      .then((result) => {
        if (!result) {
          if (timesTried >= maxTries) {
            throw new Error('Maximum polling times reached.');
          }

          return new Promise((resolve) => {
            setTimeout(
              () => {
                resolve(pollSession(redisGetAsync, sessionKey, callback, interval, maxTries, timesTried + 1));
              },
              interval
            );
          });
        } else {
          return result;
        }
      });
}

describe('GET /init', () => {
  it('should return a unique session ID', (done) => {
    request
      .get('/init')
      .end((err, res1) => {
        expect(err).to.be.null;

        request
          .get('/init')
          .end((err, res2) => {
            expect(err).to.be.null;
            expect(res1.body).to.have.property('sessionId');
            expect(res2.body).to.have.property('sessionId');
            expect(res1.body.sessionId).to.not.equal(res2.body.sessionId);
            done();
          });
      });
  });
});

describe('Sequential execution of modules', () => {
  let redisClient;
  let redisGetAsync;

  let timeout = 0;
  let lastStep = null;

  beforeAll(() => {
    redisClient = require('redis').createClient();
    redisGetAsync = util.promisify(redisClient.get).bind(redisClient);
  });

  afterAll(() => {
    redisClient.quit();
  });

  timeout += 2000;
  it(
    'should init a session',
    () => {
      lastStep = request
        .get('/init')
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.property('sessionId');
          return res.body.sessionId;
        });

      return lastStep;
    },
    timeout
  );

  timeout += 2000;
  it(
    'should start ingest',
    () => {
      let body = require('./resources/start-ingest.json');

      lastStep = lastStep.then((sessionId) => {
        body.sessionId = sessionId;

        return request
          .post('/ingest/start')
          .send(body)
          .expect(200)
          .then(() => sessionId)
      });

      return lastStep;
    },
    timeout
  );

  timeout += 10 * 1000;
  it(
    'should receive ingest-completed callback',
    () => {
      lastStep = lastStep.then(
        (sessionId) => pollSession(
          redisGetAsync,
          `coordinator:sessions:${sessionId}`,
          (session) => {
            if (session.status === 'ingest-completed') {
              return true;
            }

            if (session.status === 'ingest-failed') {
              throw new Error('Ingest failed.');
            }

            return false;
          }
        )
      );

      return lastStep;
    },
    timeout
  );
});
