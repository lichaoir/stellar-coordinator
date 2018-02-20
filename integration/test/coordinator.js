const assert = require('assert');
const request = require('supertest')('http://localhost:8000');
const expect = require('chai').expect;

describe('GET /init', () => {
  it('should return a unique session ID', (done) => {
    request
      .get('/init')
      .end((err, res1) => {
        if (!err) {
          done(err);
        }

        request
          .get('/init')
          .expect((res2) => {
            expect(res1).to.have.property('sessionId');
            expect(res2).to.have.property('sessionId');
            expect(res1.sessionId).to.not.equal(res2.sessionId);
          })
          .end(done);
      });
  });
});
