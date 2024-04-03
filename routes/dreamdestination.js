
var express = require('express');
const dreamdestination_controlers= require('../controllers/dreamdestination');
var router = express.Router();
/* GET dreamdestinations */
router.get('/', dreamdestination_controlers.dreamdestination_view_all_Page );
module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('dreamdestination', { title: 'Search Results Dream Destination' });
// });

// module.exports = router;
