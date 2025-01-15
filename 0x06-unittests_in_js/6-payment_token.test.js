const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with correct response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });

    it('should resolve with undefined when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                expect(response).to.be.undefined;
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});
