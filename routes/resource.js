var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dreamdestination_controller = require('../controllers/dreamdestination');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dreamdestination ROUTES ///
// POST request for creating a dreamdestination. 
router.post('/dreamdestination', dreamdestination_controller.dreamdestination_create_post);
// DELETE request to delete dreamdestination.
router.delete('/dreamdestination/:id', dreamdestination_controller.dreamdestination_delete);
// PUT request to update dreamdestination.
router.put('/dreamdestination/:id', dreamdestination_controller.dreamdestination_update_put);
// GET request for one dreamdestination.
router.get('/dreamdestination/:id', dreamdestination_controller.dreamdestination_detail);
// GET request for list of all dreamdestination items.
router.get('/dreamdestination', dreamdestination_controller.dreamdestination_list);
module.exports = router;