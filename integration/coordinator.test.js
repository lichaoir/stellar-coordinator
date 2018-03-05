const assert = require('assert');
const request = require('supertest')('http://localhost:8000');
const expect = require('chai').expect;

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
  let timeout = 0;
  let lastStep = null;

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

      lastStep = lastStep.then((sessionId) =>
        request
          .post('/ingest/start')
          .send(body)
          .expect(200)
      );

      return lastStep;
    },
    timeout
  )
});
