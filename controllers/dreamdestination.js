var dreamdestination = require('../models/dreamdestination');
// List of all dreamdestinations
exports.dreamdestination_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination list');
};
// for a specific dreamdestination.
exports.dreamdestination_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination detail: ' + req.params.id);
};
// Handle dreamdestination create on POST.
exports.dreamdestination_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination create POST');
};
// Handle dreamdestination delete from on DELETE.
exports.dreamdestination_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination delete DELETE ' + req.params.id);
};
// Handle dreamdestination update form on PUT.
exports.dreamdestination_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination update PUT' + req.params.id);
};
