const http = require('http');

var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


// app.set('port', (process.env.PORT || 5000));

// //For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(
  
//   app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });

