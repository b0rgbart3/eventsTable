const http = require('http');

var express = require("express");
var app = express();
const mysql = require('mysql')

var events = [['Bob','Online',0],
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
const connection = mysql.createConnection({
  host: ENV['DB_HOST'],
  user: ENV['DB_USER'],
  password: ENV['DB_PASSWORD'],
  database: ENV['DATABASE'],
})

// View engine
app.set('view engine', 'ejs')

// Render Home Page
app.get('/', function (req, res) {

  connection.query('SELECT * FROM user WHERE id = "1"', (error, rows) => {
    if (error) throw error;

    if (!error) {
      console.log(rows)
      res.render('pages/index', { rows })
    }

  })

})


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/events", (req, res, next) => {
  res.json(events);
 });





//For avoidong Heroku $PORT error
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(
  
  app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

