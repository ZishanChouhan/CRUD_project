const mysql      = require('mysql2');
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Passwo@1',
  database : 'my_db'
});

module.exports = pool.promise();