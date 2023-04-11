// importing packgages
const express = require('express');

// signing variables
const app = express();
const port = process.env.PORT | 3000;

app
    .route('/')
    .get((req, res) => {
        res.send("Hello Dude! we are on stage #1")
    });

app.listen(port, () => {
    console.log(`app listening on Port -> ${port}`)
})