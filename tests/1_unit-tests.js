const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
let convertHandler = new ConvertHandler();
let { getNum, getUnit, getReturnUnit, convert, getString, spellOutUnit} = convertHandler;


suite('Unit Tests', function () {

  // -----------------------------------------------------------------------------

  suite('Numbers Test', function () {
    // convertHandler should correctly read a whole number input.
    test('#whole number input', function () {
      assert.strictEqual(getNum('4kg'), 4, 'convertHandler should correctly read a whole number input.');
    });
    // convertHandler should correctly read a decimal number input.
    test('#decimal number', function () {
      assert.strictEqual(getNum('4.5kg'), 4.5,'convertHandler should correctly read a decimal number input');
    });
    // convertHandler should correctly read a fractional input.
    test('#fractional input', function () {
      assert.strictEqual(getNum('4/5kg'), 4/5, 'convertHandler should correctly read a fractional input.');
      
    });
    // convertHandler should correctly read a fractional input with a decimal.
    test('#fractional input with a decimal', function () {
      assert.strictEqual(getNum('4.1/5kg'), 4.1/5, 'convertHandler should correctly read a fractional input with a decimal.');
    });
    // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    test('#double-fraction', function () {
      assert.strictEqual(getNum('3/2/3kg'), 'invalid number', 'convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).');

    });
    // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    test('#NoNumericalInput-is-provided', function () {
      assert.strictEqual(getNum('kg'), 1, 'convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.');

    });
  });

  // -----------------------------------------------------------------------------

  suite('Units Test', function () {
    // convertHandler should correctly read each valid input unit.
    test('#Valid-input-unit', function () {
      assert.strictEqual(getUnit('4kg'), 'kg', 'convertHandler should correctly read each valid input unit.');
    });
    // convertHandler should correctly return an error for an invalid input unit.
    test('#invalid-input', function () {
      assert.notStrictEqual(getUnit('4kkg'), 'kg', 'convertHandler should correctly return an error for an invalid input unit.');
      assert.strictEqual(getReturnUnit('4kkg'), 'invalid unit', 'convertHandler should correctly return an error for an invalid input unit.');
    });
    // convertHandler should return the correct return unit for each valid input unit.
    test('#Each-valid-input-unit', function () {
      assert.strictEqual(getUnit('kg'),"kg", " convertHandler can not read kg");
      assert.strictEqual(getUnit('L'),"L", "convertHandler can not read l");
      assert.strictEqual(getUnit('gal'),"gal", "convertHandler can not read gal");
      assert.strictEqual(getUnit('lbs'),"lbs", "convertHandler can not read lbs");
      assert.strictEqual(getUnit('mi'),"mi", "convertHandler can not read mi");
      assert.strictEqual(getUnit('km'),"km", "convertHandler can not read km");
    });
    // convertHandler should correctly return the spelled-out string unit for each valid input unit.
    test('#spelled-out', function () {
      assert.strictEqual(spellOutUnit('kg'),"kilograms", " convertHandler can not spell Out Unit kg");
      assert.strictEqual(spellOutUnit('L'),"liters", "convertHandler can not spell Out Unit l");
      assert.strictEqual(spellOutUnit('gal'),"gallons", "convertHandler can not spell Out Unit gal");
      assert.strictEqual(spellOutUnit('lbs'),"pounds", "convertHandler can not spell Out Unit lbs");
      assert.strictEqual(spellOutUnit('mi'),"miles", "convertHandler can not spell Out Unit mi");
      assert.strictEqual(spellOutUnit('km'),"kilometers", "convertHandler can not spell Out Unit km");
  });
});

  // -----------------------------------------------------------------------------

  suite('Convert Test', function () {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const delta = 0.00005;
    // convertHandler should correctly convert gal to L.
    test('#galToL', function () {
      const input = "4gal";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'gal', 'getUnit function');
      assert.strictEqual(returnUnit, 'L', 'getReturnUnit function');
      assert.approximately(returnNum, 4 * galToL, delta, 'convert function');
    });
    // convertHandler should correctly convert L to gal.
    test('#LToGal', function () {
      const input = "4l";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'L', 'getUnit function');
      assert.strictEqual(returnUnit, 'gal', 'getReturnUnit function');
      assert.approximately(returnNum, 4 / galToL, delta, 'convert function');
    });
    // convertHandler should correctly convert mi to km.
    test('#miToKm', function () {
      const input = "4mi";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'mi', 'getUnit function');
      assert.strictEqual(returnUnit, 'km', 'getReturnUnit function');
      assert.approximately(returnNum, 4 * miToKm, delta, 'convert function');
    });
    // convertHandler should correctly convert km to mi.
    test('#kmToMi', function () {
      const input = "4km";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'km', 'getUnit function');
      assert.strictEqual(returnUnit, 'mi', 'getReturnUnit function');
      assert.approximately(returnNum, 4 / miToKm, delta, 'convert function');
    });
    // convertHandler should correctly convert lbs to kg.
    test('#lbsToKg', function () {
      const input = "4lbs";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'lbs', 'getUnit function');
      assert.strictEqual(returnUnit, 'kg', 'getReturnUnit function');
      assert.approximately(returnNum, 4 * lbsToKg, delta, 'convert function');
    });
    // convertHandler should correctly convert kg to lbs.
    test('#kgToLbs', function () {
      const input = "4kg";
      let initNum = getNum(input);
      let initUnit = getUnit(input);
      let returnUnit = getReturnUnit(initUnit);
      let returnNum = convert(initNum, initUnit);
      assert.strictEqual(initNum, 4, 'getNum function');
      assert.strictEqual(initUnit, 'kg', 'getUnit function');
      assert.strictEqual(returnUnit, 'lbs', 'getReturnUnit function');
      assert.approximately(returnNum, 4 / lbsToKg, delta, 'convert function');
    });
  });

  // -----------------------------------------------------------------------------
});