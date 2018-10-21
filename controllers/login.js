const knex = require("../db/knex.js");

module.exports = {
  login: function(req, res) {
    res.render("login");
  },
}