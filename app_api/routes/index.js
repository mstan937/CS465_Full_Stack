const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Route to list all trips
router
  .route('/trips')
  .get(tripsController.tripsList);

// Route to get a trip by code
router
  .route('/trips/:code') // This defines the route with the code parameter
  .get(tripsController.getTripByCode);

module.exports = router;

