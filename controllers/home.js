const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  homepage: function(req, res) {
    res.render("homepage");
  },
}
