var express = require('express');
var SerialPort = require("serialport").SerialPort;
var twilio = require('twilio');

//instantiate express
var app = express();


app.post('/sms', twilio.webhook('your auth token', { host:'foo.herokuapp.com', protocol:'https' }), function(req, res){
 if (req.body.From == "+12128675309" && req.body.Body == "ABC123") {
   console.log("verified number!");
 } else {
   console.log("Wrong number!");
   sendMessage(res, "Invalid number!");
 }

});

serialPort.once('data', function(data) {
     if (data.toString().indexOf('U') > -1) { //check if the Arduino returned a U for unlocking
       sendMessage(res, 'Unlocking!');
     }
     else if (data.toString().indexOf('L') > -1) {
       sendMessage(res, 'Locking!');
     }
     else {
       sendMessage(res, 'ERROR');
     }
     console.log('data received: ' + data);
   });

   serialPort.write("V", function(err, results) {
     if (err) {
       console.log('err ' + err);
     }
     console.log('results ' + results);
   });

   serialPort.once('data', function(data) {
     if (data.toString().indexOf('U') > -1) { //check if the Arduino returned a U for unlocking
       sendMessage(res, 'Unlocking!');
     }
     else if (data.toString().indexOf('L') > -1) {
       sendMessage(res, 'Locking!');
     }
     else {
       sendMessage(res, 'ERROR');
     }
     console.log('data received: ' + data);
   });

   serialPort.write("V", function(err, results) {
     if (err) {
       console.log('err ' + err);
     }
     console.log('results ' + results);
   });

   serialPort.once('data', function(data) {
     if (data.toString().indexOf('U') > -1) { //check if the Arduino returned a U for unlocking
       sendMessage(res, 'Unlocking!');
     }
     else if (data.toString().indexOf('L') > -1) {
       sendMessage(res, 'Locking!');
     }
     else {
       sendMessage(res, 'ERROR');
     }
     console.log('data received: ' + data);
   });

   serialPort.write("V", function(err, results) {
     if (err) {
       console.log('err ' + err);
     }
     console.log('results ' + results);
   });
