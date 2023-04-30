const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
   suite('Numbers Test', function () {
      // convertHandler should correctly read a whole number input.
      test('#whole number input', function () {
        assert.isFalse(false, 'no tea yet? hmm...');
      });
      // convertHandler should correctly read a decimal number input.
      test('#isDefined, #isUndefined', function () {
        assert.fail(null, 'null is not undefined');
      });
      // convertHandler should correctly read a fractional input.
      test('#isOk, #isNotOk', function () {
        assert.fail(null, 'null is falsey');
        
      });
      // convertHandler should correctly read a fractional input with a decimal.
      test('#isTrue, #isNotTrue', function () {
        assert.fail(true, 'true is true');

      });
      // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
      test('#isTrue, #isNotTrue', function () {
        assert.fail(true, 'true is true');

      });
      // // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
      test('#isTrue, #isNotTrue', function () {
        assert.fail(true, 'true is true');

      });
    });
});