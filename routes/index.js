var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {'title': 'index'});
});

router.get('/test', function(req, res, next) {
  res.json({'response': 'test'});
});

module.exports = router;
