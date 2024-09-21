var fs = require('fs'); 
var trips = JSON.parse(fs.readFileSync('.data/trips.json','utf8')); 


/* GET travel view page */
const travel = function(req, res) {
  res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = { travel };