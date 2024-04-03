var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dreamdestination = require("./models/dreamdestination");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dreamdestinationRouter = require('./routes/dreamdestination');
var gridRouter = require('./routes/grid');
var randomitemRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dreamdestination', dreamdestinationRouter);
app.use('/grid', gridRouter);
app.use('/selector', randomitemRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start

async function recreateDB(){
 // Delete everything
 await dreamdestination.deleteMany();

let instance1 = new 
dreamdestination({name: "Maldives", location: "South Asia", rating: 4.9 });
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance2 = new 
dreamdestination({name: "Bora Bora", location: "France", rating: 4.8});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });

 let instance3 = new 
dreamdestination({name: "Maui", location: "USA", rating: 4.7});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });

}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
