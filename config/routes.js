//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const home = require("../controllers/home.js")

module.exports = function(app){

  app.get('/', template.index);

  app.get('/home', home.homepage);
}
