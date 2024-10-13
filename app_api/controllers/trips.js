const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status 
// code and JSON message to the requesting client
// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
    const q = await Model
    .findOneAndUpdate(
    {'code': req.params.tripCode },
    {
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
    }
    )
    .exec();
    if(!q)
    { // Database returned no data
    return res
    .status(400)
    .json(err);
    } else { // Return resulting updated trip
    return res
    .status(201)
    .json(q);
    }
    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
    };
    
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

const tripsAddTrip = async (req, res) => {
    
        // Create a new trip from the request body
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
            
            
        });

        const q = await newTrip.save();
             if (!q) 
                { //Database returned no data
                 return res
                 .status(400)
                 .json(err);
             }else { //return new trip
                    return res
                    .status(201)
                    .json(q);
                }

        // Save the new trip to the database
        const savedTrip = await newTrip.save();

        // Return the saved trip with a 201 status
        return res.status(201).json(savedTrip);

    } // <-- Add this closing brace
   
    
    
;

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
    tripsAddTrip,
    tripsUpdateTrip,
    getTripByCode // Export the new controller method
};
