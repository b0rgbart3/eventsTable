const http = require('http');
const path = require('node:path');
var express = require("express");
var app = express();
const mysql = require('mysql')
// const {parse, stringify, toJSON, fromJSON} = require('flatted');

var hard_coded_events = [['Bob','Online',0],
['Alice','Online',0],
['Bob','Touch',5],
['Bob','Start Call',10],
['Alice','Touch',10],
['Bob','Stop Call',20],
['Alice','Start Call',20],
['Bob','Offline',30],
['Alice','Stop Call',40],
['Bob','Online',40],
['Alice','Offline',50]];

// Connection Details

const localhost = true;
var dbhost;
var dbuser;
var dbpass;
var db;

if (localhost) {
  dbhost = process.env.CARECOACH_DB_HOST;
  dbuser = process.env.CARECOACH_DB_USER;
  dbpass = process.env.CARECOACH_DB_PASS;
  db = process.env.CARECOACH_DB;
} else {
  dbhost = process.env.DB_HOST;
  dbuser = process.env.DB_USER;
  dbpass = process.env.DB_PASS;
  db = process.env.DATABASE;
}

const connection = mysql.createConnection({
  host: dbhost,
  user: dbuser,
  password: dbpass,
  database: db
})

console.log('user: ', dbuser);
console.log('host: ', dbhost);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/events", (req, res, next) => {


  connection.query('USE `heroku_55c92d829ae8baf`');
  connection.query('SELECT * FROM events', (error, rows) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  
    if (error) throw error;

    if (!error) {
      console.log(rows);
      res.json(rows);
    }
  });
 });

 app.get("/api/tasks", (req, res, next) => {
  connection.query('USE `heroku_55c92d829ae8baf`');
  connection.query('SELECT * FROM tasks', (error, rows) => {
    if (error) throw error;

    if (!error) {
      console.log(rows)
      res.json(rows);
    }
  });
 });

 app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

// For avoidong Heroku $PORT error
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(
  
  app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

