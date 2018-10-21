const knex = require("../db/knex.js");

module.exports = {
  homepage: function(req, res) {
    res.render("homepage");
  },
}
