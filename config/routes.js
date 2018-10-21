//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const home = require("../controllers/home.js")
const login = require("../controllers/login.js")

module.exports = function(app){

  app.get('/', template.index);

  app.get('/home', home.homepage);

  app.get('/login', login.login);
}
