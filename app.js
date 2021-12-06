var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/**
 * setup MongoDB database connection
 */

var mongoose = require('mongoose');
//! TODO REFACTOR
//var mongoDB = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0-ud3ms.mongodb.net/pushmees_pullmees?retryWrites=true&w=majority`;
var mongoDB = `mongodb+srv://ufer:1234@ufercluster.dansj.mongodb.net/UferProto?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/** 
 * Routers
 */

var serviceCategoryRouter = require('./routes/serviceCategoryRouter.js');


/**
 * App setup
 */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
 * MIDDLEWARE routes box, reality
 */

app.use('/serviceCategory', serviceCategoryRouter);


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

module.exports = app;
