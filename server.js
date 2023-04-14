// importing packgages
const express = require('express');
require('dotenv').config();
const routes = require('./routes/routes.js')

// signing variables
const app = express();
const port = process.env.PORT || 8080;

// app.use
app.use("/public", express.static(process.cwd() + "/public"));

// app.set
app.set("views", "./views/pug");
app.set("view engine", "pug");

routes(app);

app.listen(port, () => {
    console.log(`app listening on Port -> ${port}`)
})