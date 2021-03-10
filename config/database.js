const mysql = require("mysql")
require("dotenv").config()

const con = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: 3306
})

// module.exports = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// })

exports.con = con