'use strict';
require('dotenv').config();

// importing packgages
const express = require('express');
const routes = require('./routes/routes.js')

// signing variables
const app = express();
const port = process.env.PORT || 8080;
const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');

// app.use
app.use("/public", express.static(process.cwd() + "/public"));


// app.set
app.set("views", "./views/pug");
app.set("view engine", "pug");

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API
routes(app);

app.listen(port, () => {
    console.log(`app listening on Port -> ${port}`)
    if(process.env.NODE_ENV==='test') {
        console.log('Running Tests...');
        setTimeout(function () {
          try {
            runner.run();
          } catch(e) {
              console.log('Tests are not valid:');
              console.error(e);
          }
        }, 1500);
      }
})