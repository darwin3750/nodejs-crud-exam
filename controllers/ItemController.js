const items = require("../models/Item")

module.exports = {
  show: function(req, res) {
    items.show(req.mysql, req.params.id, function(err, rows) {
      res.send(rows[0]===undefined ? "Item not found" : {data: rows[0]});
    })
  },

  store: function(req, res) {
    items.create(req.mysql, req.body, function(err) {
      res.send("success!");
    })
  },

  update: function(req, res) {
    items.update(req.mysql, req.body, req.params.id, function(err) {
      res.send("success!");
    })
  },

  destroy: function(req, res) {
    items.destroy(req.mysql, req.params.id, function(err) {
      res.send("success!");
    })
  }
}