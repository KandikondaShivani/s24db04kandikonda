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
exports.dreamdestination_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dreamdestination.findById(req.params.id)
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
exports.dreamdestination_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dreamdestination();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dreamdestination_type":"goat", "loacation":12, "rating":"large"}
    document.destinationname = req.body.destinationname;
    document.location = req.body.location;
    document.rating = req.body.rating;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle dreamdestination delete from on DELETE.
// exports.dreamdestination_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: dreamdestination delete DELETE ' + req.params.id);
// };

// Handle dreamdestination delete on DELETE.
exports.dreamdestination_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await dreamdestination.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle dreamdestination update form on PUT.
// exports.dreamdestination_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: dreamdestination update PUT' + req.params.id);
// };

// Handle dreamdestination update form on PUT.
exports.dreamdestination_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dreamdestination.findById(req.params.id)
        // Do updates of properties
        if (req.body.destinationname)
            toUpdate.destinationname = req.body.destinationname;
        if (req.body.location) toUpdate.location = req.body.location;
        if (req.body.rating) toUpdate.rating = req.body.rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
};

// VIEWS
// Handle a show all view
exports.dreamdestination_view_all_Page = async function (req, res) {
    try {
        thedreamdestinations = await dreamdestination.find();
        res.render('dreamdestination', { title: 'dreamdestination Search Results', results: thedreamdestinations });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.dreamdestination_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dreamdestination.findById( req.query.id)
    res.render('dreamdestinationdetail', 
   { title: 'dreamdestination Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a dreamdestination.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dreamdestination_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dreamdestinationcreate', { title: 'dreamdestination Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a dreamdestination.
// query provides the id
exports.dreamdestination_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await dreamdestination.findById(req.query.id)
        res.render('dreamdestinationupdate', { title: 'dreamdestination Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.dreamdestination_delete_Page = async function(req, res) {
 console.log("Delete view for id " + req.query.id)
 try{
 result = await dreamdestination.findById(req.query.id)
 res.render('dreamdestinationdelete', { title: 'dreamdestination Delete', toShow: 
result });
 }
 catch(err){
 res.status(500)
 res.send(`{'error': '${err}'}`);
 }
};