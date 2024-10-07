const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status 
// code and JSON message to the requesting client
const tripsList = async (req, res) => {
    try {
        // Find all trips, no filters applied
        const trips = await Trip.find({}).exec();
        
        // Log the results to the console for debugging
        console.log(trips);

        // If no trips found, return a 404 status
        if (!trips || trips.length === 0) {
            return res.status(404).json({
                message: 'No trips found'
            });
        }

        // If trips are found, return a 200 status and the list of trips
        return res.status(200).json(trips);
        
    } catch (err) {
        // If there's an error, return a 500 status and error message
        return res.status(500).json({
            message: 'An error occurred while retrieving trips',
            error: err.message
        });
    }
};

// GET: /trips/:code - retrieves a trip by code parameter
const getTripByCode = async (req, res) => {
    try {
        const tripCode = req.params.code; // Extract the code parameter from the request

        // Find the trip that matches the code
        const trip = await Trip.findOne({ code: tripCode }).exec();

        // If no trip is found, return a 404 status
        if (!trip) {
            return res.status(404).json({
                message: `No trip found with code: ${tripCode}`
            });
        }

        // If trip is found, return it with a 200 status
        return res.status(200).json(trip);

    } catch (err) {
        // If there's an error, return a 500 status and error message
        return res.status(500).json({
            message: 'An error occurred while retrieving the trip',
            error: err.message
        });
    }
};

module.exports = {
    tripsList,
    getTripByCode // Export the new controller method
};
