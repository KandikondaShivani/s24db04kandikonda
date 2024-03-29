var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dreamdestination', { title: 'Search Results Dream Destination' });
});

module.exports = router;
