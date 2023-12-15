const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');
// const connection = require('./connection');

// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Passwo@1',
//   database : 'my_db'
// });
 
// connection.connect(
//   function(err) {
//     if (err) throw err;
//     console.log("Connected!");

    
//   });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})


app.use('/', route)

app.listen(8000, () => console.log("connected"))