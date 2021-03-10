module.exports = {
  show: function(con, id, callback) {
    con.connect(function(err) {
      if (err) throw err;
      con.query(`SELECT * FROM items WHERE id = ${id}`, callback)
    });
    
  },

  create: function(con, data, callback) {
    con.connect(function(err) {
      if (err) throw err;
      con.query(
        `INSERT INTO items SET 
          name = '${data.name}', 
          qty = '${data.qty}'`,
        callback
      )
    });
    
  },

  update: function(con, data, id, callback) {
    con.connect(function(err) {
      if (err) throw err;
      con.query(
        `UPDATE items SET 
          name = '${data.name}', 
          qty = '${data.qty}',
          WHERE id = ${id}`,
        callback
      )
    });
    
  },

  destroy: function(con, id, callback) {
    con.connect(function(err) {
      if (err) throw err;
      con.query(`DELETE FROM items WHERE id = ${id}`, callback)
    });
    
  }
}