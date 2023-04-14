const convertHandler = require('./convertHandler.js');

module.exports = (app) => {
    app.route("/").get((req, res) => {
        console.log("Hello Form Homepage");
        res.render("index");
      });
    app.route("/api/convert")
       .get((req, res) => {
        let input = req.query.input;
        if((input === undefined) || ( input.length === 0)) res.send("invalid input!");
        else {
          const out = convertHandler(input);
          res.send(out)
        };
       })
}