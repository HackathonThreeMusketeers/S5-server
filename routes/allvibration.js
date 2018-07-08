var express = require('express');
var router = express.Router();
var socket = require('../socketio/index');

router.get('/', function(req, res, next) {
  socket.sendAllVibration(); 
  console.log("/sendAllVibration");
  res.json({title: 'ok'});
});

module.exports = router;
