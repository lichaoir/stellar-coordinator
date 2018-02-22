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
