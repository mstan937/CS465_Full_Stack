
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Existing routers
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');

// New API router (add this line)
var apiRouter = require('./app_api/routes/index');

// Handlebars setup
var handlebars = require('hbs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register Handlebars partials (https://www.npmjs.com/package/hbs)
handlebars.registerPartials(__dirname + '/app_server/views/partials');

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Enable CORS
app.use('api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost4200');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
// Use existing routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);

// Repoint the database module after moving it under app_api
require('./app_api/models/db');

// Wire up the API router for handling /api requests
app.use('/api', apiRouter);  // Add this line

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
