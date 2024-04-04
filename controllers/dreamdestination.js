var dreamdestination = require('../models/dreamdestination');

// List of all dreamdestinations
exports.dreamdestination_list = async function (req, res) {
    try {
        thedreamdestinations = await dreamdestination.find();
        res.send(thedreamdestinations);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// List of all dreamdestinations
// exports.dreamdestination_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: dreamdestination list');
// };

// for a specific dreamdestination.
// exports.dreamdestination_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: dreamdestination detail: ' + req.params.id);
// };

// for a specific dreamdestination.
exports.dreamdestination_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dreamdestination.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle dreamdestination create on POST.
// exports.dreamdestination_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: dreamdestination create POST');
// };

// Handle dreamdestination create on POST.
exports.dreamdestination_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dreamdestination();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dreamdestination_type":"goat", "cost":12, "size":"large"}
    document.destinationname = req.body.destinationname;
    document.location = req.body.location;
    document.rating = req.body.rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

// Handle dreamdestination delete from on DELETE.
exports.dreamdestination_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination delete DELETE ' + req.params.id);
};
// Handle dreamdestination update form on PUT.
exports.dreamdestination_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dreamdestination update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.dreamdestination_view_all_Page = async function(req, res) {
    try{
    thedreamdestinations = await dreamdestination.find();
    res.render('dreamdestination', { title: 'dreamdestination Search Results', results: thedreamdestinations });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };