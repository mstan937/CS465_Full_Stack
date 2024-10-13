const fetch = require('node-fetch'); // Fetch API for Node.js

// Define the API endpoint and options for the request
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

/* GET travel view page */
const travel = async function name(req,res,next) {
  await fetch(tripsEndpoint, options)
  .then(res => res.json())
  .then(json => {
    res.render('travel', { 
      title: 'Travlr Getaways',
      trips: json})
    })
    
    .catch(err => res.status(500).send(err.message));
    //console.log('TRAVEL CONTROLLER AFTER RENDER');
    };
function tripsData(req, res) {
  // Fetch the trips data from the API endpoint
  fetch(tripsEndpoint, options)
    .then(res => {
      if (!res.ok) { // Check if the response status is not OK
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(json => {
      console.log(json); // Log the fetched trips data for debugging
      res.render('travel', { 
        title: 'Travlr Getaways',
        trips: json  // Pass the trips data to the view
      });
    })
    .catch(err => {
      console.error('Error fetching trips:', err);
      res.status(500).send(err.message);
    });
};

// Export the travel function
module.exports = { travel };
