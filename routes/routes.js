const convertHandler = require('./convertHandler.js');

module.exports = (app) => {
    app.route("/").get((req, res) => {
        console.log("Hello Form Homepage");
        res.render("index");
      });
    app.route("/api/convert")
       .get((req, res) => {
        const { input } = req.query;
        let convertedValue = convertHandler(input);
        if (typeof convertedValue === "string") res.send(convertedValue);
        else res.json(convertedValue);
       })
       
       app.use(function(req, res, next) {
        res.status(404)
          .type('text')
          .send('Not Found');
      });
}