//const express = require('express');
//const path = require('path');
//const travelRouter = require('./app_server/routes/travel'); // Adjust the path accordingly
//const travelRouter = require('C:\\Users\\marcu\\travlr\\app_server\\routes\\travel.js'); // Adjust the path accordingly

//const app = express();

// Middleware and other configurations

//app.use('/', travelRouter); // This will mount the travel router

// Other routes and error handling

//module.exports = app;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
