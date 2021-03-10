const items = require("../models/Item")

module.exports = {
  show: function(req, res) {
    items.show(req.con, req.params.id, function(err, rows) {
       res.send({ data: rows[0] });
    })
  },

  store: function(req, res) {
    items.create(req.con, req.body, function(err) {
      res.send("success!");
    })
  },

  update: function(req, res) {
    items.update(req.con, req.body, req.params.id, function(err) {
      res.send("success!");
    })
  },

  destroy: function(req, res) {
    items.destroy(req.con, req.params.id, function(err) {
      res.send("success!");
    })
  }
}