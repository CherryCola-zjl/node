var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 55007,
  user     : 'root',
  password : 'mysqlpw'
});
 
connection.connect();
 
connection.query('CREATE DATABASE IF NOT EXISTS zang DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.query('use zang;')

connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();