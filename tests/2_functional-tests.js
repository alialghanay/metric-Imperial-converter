const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

const galToL = 3.78541;
const lbsToKg = 0.453592;
const miToKm = 1.60934;

chai.use(chaiHttp);

suite('Functional Tests', function() {
    // Convert a valid input such as 10L: GET request to /api/convert.
    suite('GET request to /api/convert.', function() {
        // Convert a valid input such as 10L: GET request to /api/convert.
        suite('Convert valid input', function() {
            const initnum = 10;
            // Converting Liters
            test('#Liters', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'L'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum / galToL, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'gal', 'converts Units ok');
                        done();
                    })
            })
            // Converting Gallons
            test('#Gallons', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'gal'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum * galToL, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'l', 'converts Units ok');
                        done();
                    })
            })
            // Converting kilograms
            test('#kilograms', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'kg'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum / lbsToKg, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'lbs', 'converts Units ok');
                        done();
                    })
            })
            // Converting pounds
            test('#pounds', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'lbs'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum * lbsToKg, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'kg', 'converts Units ok');
                        done();
                    })
            })
            // Converting miles
            test('#miles', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'mi'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum * miToKm, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'km', 'converts Units ok');
                        done();
                    })
            })
            // Converting kilometers
            test('#kilometers', function(done) {
                chai.request(server)
                    .get('/api/convert/')
                    .query({input: initnum + 'km'})
                    .end((req, res) => {
                        assert.strictEqual(res.body.returnNum, initnum / miToKm, 'converts numbers ok');
                        assert.strictEqual(res.body.returnUnit, 'mi', 'converts Units ok');
                        done();
                    })
            })
        })
        // Convert an invalid input such as 32g: GET request to /api/convert.
        test('#invalid-input', function(done) {
            chai.request(server)
                .get('/api/convert')
                .query({input: 10 + 'g'})
                .end((req, res) => {
                    assert.strictEqual(res.text, "invaild unit", "invalid input unit")
                    done();
                })
        })
        // Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
        test('#invalid-number', function(done) {
            chai.request(server)
                .get('/api/convert')
                .query({input: '3/7.2/4kg'})
                .end((req, res) => {
                    assert.strictEqual(res.text, "invalid number",'double-fraction')
                    done();
                })
        })
        // Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
        test('#invalid-number-unit', function(done) {
            chai.request(server)
                .get('/api/convert')
                .query({input: '3/7.2/4kilomegagram'})
                .end((req, res) => {
                    assert.strictEqual(res.text, "invalid number and unit",'invalid number and unit')
                    done();
                })
        })
        // Convert with no number such as kg: GET request to /api/convert.
        test('#No-number', function(done) {
            chai.request(server)
                .get('/api/convert')
                .query({input: 'kg'})
                .end((req, res) => {
                    assert.strictEqual(res.body.initNum, 1, 'auto number');
                    assert.strictEqual(res.body.initUnit, 'kg', 'unit');
                    done();
                })
        })
    })
});
