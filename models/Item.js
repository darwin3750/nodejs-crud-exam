module.exports = {
  show: function(mysql, id, callback) {
    mysql.getConnection(function(err, con){
      con.query(`SELECT * FROM items WHERE id = ${id}`, callback)
    })
  },

  create: function(mysql, data, callback) {
    mysql.getConnection(function(err, con){
      con.query(
        `INSERT INTO items SET 
          name = '${data.name}', 
          qty = '${data.qty}'
        `,
        callback
      )
    })
  },

  update: function(mysql, data, id, callback) {
    mysql.getConnection(function(err, con){
      con.query(
        `UPDATE items SET 
          name = '${data.name}', 
          qty = '${data.qty}'
          WHERE id = ${id}`,
        callback
      )
    })
  },

  destroy: function(mysql, id, callback) {
    mysql.getConnection(function(err, con){
      con.query(`DELETE FROM items WHERE id = ${id}`, callback)
    })
  }
}