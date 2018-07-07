var express = require('express');
var router = express.Router();
var socket = require('../socketio/index');

router.get('/', function(req, res, next) {
  socket.sendVibration(req.query.id); 
  console.log("/sendVibration");
  res.json({title: 'ok', id: req.query.id});
});

module.exports = router;
