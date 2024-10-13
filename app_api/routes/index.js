const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Route to list all trips and add a new trip
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

// Route to get a trip by code
router
  .route('/trips/:tripCode') // This defines the route with the code parameter
  .get(tripsController.getTripByCode)
  .put(tripsController.tripsUpdateTrip);
module.exports = router;

