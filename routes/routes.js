'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = (app) => {
    let convertHandler = new ConvertHandler();
    app.route("/api/convert")
       .get((req, res) => {
        const { input } = req.query;
      })
    }
    
    // const { input } = req.query;
    // let convertedValue = convertHandler(input);
    // if (typeof convertedValue === "string") res.send(convertedValue);
    // else res.json(convertedValue);