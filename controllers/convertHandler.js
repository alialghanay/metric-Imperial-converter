// // Regular Expression
// const regexSyntax = /([^\w\/\.\s])|([\d\.\s]+\/[\d\.\s]+\/[\d\.\s]+)|(\/{2,})/g;
// const regexUnit = /[^\d\.\/\s]+/i;
// const regexNum = /[\d\.\/\s]+/;

// // Convert Handler Function
// module.exports = (input) => {
//   if((input === undefined) || ( input.length === 0)) return "invalid input!";
//   else if(regexSyntax.test(input)) return "invalid number";
//   else{
//     const output = {};
//     output.initNum = regexNum.test(input)? eval(input.match(regexNum)[0]) : 1;
//     output.initUnit = regexUnit.test(input)? input.match(regexUnit)[0].toLowerCase() : "";
//     switch (output.initUnit) {
//       case "gal":
//         output.returnNum = output.initNum * 3.78541;
//         output.returnUnit = "l";
//         output.string = `${output.initNum} gallons converts to ${output.returnNum} liters`;
//         break;
//       case "l":
//         output.returnNum = output.initNum / 3.78541;
//         output.returnUnit = "gal";
//         output.string = `${output.initNum} liters converts to ${output.returnNum} gallons`;
//         break;
//       case "kg":
//         output.returnNum = output.initNum * 2.20462;
//         output.returnUnit = "lbs";
//         output.string = `${output.initNum} kilograms converts to ${output.returnNum} pounds`;
//         break;
//       case "lbs":
//         output.returnNum = output.initNum / 2.20462;
//         output.returnUnit = "kg";
//         output.string = `${output.initNum} pounds converts to ${output.returnNum} kilograms`;
//       break;
//       case "mi":
//         output.returnNum = output.initNum * 1.60934;
//         output.returnUnit = "mi";
//         output.string = `${output.initNum} miles converts to ${output.returnNum} kilometers`;
//         break;
//       case "km":
//         output.returnNum = output.initNum / 1.60934;
//         output.returnUnit = "km";
//         output.string = `${output.initNum} kilometers converts to ${output.returnNum} miles`;
//         break;
//       default:
//                 return "invaild unit"
//     }
//     return output;
//   }
// }

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;