
var express = require('express');
const dreamdestination_controlers= require('../controllers/dreamdestination');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET dreamdestinations */
router.get('/', dreamdestination_controlers.dreamdestination_view_all_Page );
module.exports = router;

/* GET detail dreamdestination page */
router.get('/detail', dreamdestination_controlers.dreamdestination_view_one_Page);

/* GET create dreamdestination page */
router.get('/create', dreamdestination_controlers.dreamdestination_create_Page);

/* GET create update page */
router.get('/update',secured, dreamdestination_controlers.dreamdestination_update_Page);

/* GET delete dreamdestination page */
router.get('/delete', dreamdestination_controlers.dreamdestination_delete_Page);

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('dreamdestination', { title: 'Search Results Dream Destination' });
// });

// module.exports = router;