const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {

    // -----------------------------------------------------------------------------

    suite('Numbers Test', function () {
      // convertHandler should correctly read a whole number input.
      test('#isNull, #isNotNull', function () {
        assert.fail(null, 'This is an optional error description - e.g. null is null');
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
  
    // -----------------------------------------------------------------------------
  
    suite('Units Test', function () {
      // convertHandler should correctly read each valid input unit.
      test('#equal, #notEqual', function () {
        assert.fail(12, '12', 'Numbers are coerced into strings with ==');

      });
      // convertHandler should correctly return an error for an invalid input unit.
      test('#strictEqual, #notStrictEqual', function () {
        assert.fail(6, '6');

      });
      // convertHandler should return the correct return unit for each valid input unit.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
      // convertHandler should return the correct return unit for each valid input unit.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
      // convertHandler should correctly return the spelled-out string unit for each valid input unit.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
    });

    // -----------------------------------------------------------------------------
  
    suite('Convert Test', function () {
      // convertHandler should correctly convert gal to L.
      test('#equal, #notEqual', function () {
        assert.fail(12, '12', 'Numbers are coerced into strings with ==');

      });
      // convertHandler should correctly convert L to gal.
      test('#strictEqual, #notStrictEqual', function () {
        assert.fail(6, '6');

      });
      // convertHandler should correctly convert mi to km.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
      // convertHandler should correctly convert km to mi.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
      // convertHandler should correctly convert lbs to kg.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
      // convertHandler should correctly convert kg to lbs.
      test('#deepEqual, #notDeepEqual', function () {
        assert.fail({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");

      });
    });

    // -----------------------------------------------------------------------------

});