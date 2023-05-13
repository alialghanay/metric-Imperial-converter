// Regular Expression
const regexSyntax = /([^\w\/\.\s])|([\d\.\s]+\/[\d\.\s]+\/[\d\.\s]+)|(\/{2,})/;
const regexUnit = /[^\d\.\/\s]+/i;
const regexNum = /[\d\.\/\s]+/;

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(regexSyntax.test(input)) result = "invalid number";
    else result = regexNum.test(input)? eval(input.match(regexNum)[0]) : 1;
    return result;
  };
  
  this.getUnit = function(input) {
    let result = regexUnit.test(input)? input.match(regexUnit)[0].toLowerCase() : "";
    if (result === "l") result = "L";
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
            case "gal":
              result = "L";
              break;
            case "L":
              result = "gal";
              break;
            case "kg":
              result = "lbs";
              break;
            case "lbs":
              result = "kg";
            break;
            case "mi":
              result = "km";
              break;
            case "km":
              result = "mi";
              break;
            default:
              result = "invaild unit";
          }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "lbs":
        result = "pounds";
      break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invaild unit";
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "lbs":
        result = initNum * lbsToKg;
      break;
      case "mi":
        result = initNum * miToKm;

        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
                result = "invaild unit";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;