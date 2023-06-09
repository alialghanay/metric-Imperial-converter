"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;
    if (input === undefined || input.length === 0) res.send("invalid input!");
    else {
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      if (initNum === 'invalid number' && returnUnit === 'invalid unit') res.send('invalid number and unit');
      else if(initNum === 'invalid number') res.send(initNum);
      else if (returnUnit === 'invalid unit') res.send(returnUnit);
      else {
        let responObject = {};
        responObject.initNum = initNum;
        responObject.initUnit = initUnit;
        responObject.returnUnit = returnUnit;
        responObject.returnNum = returnNum;
        responObject["string"] = returnString;
        res.json(responObject);
      }
    }
  });
};
