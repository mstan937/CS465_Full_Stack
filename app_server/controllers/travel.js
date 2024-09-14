/* GET travel view page */
const travel = function(req, res) {
  res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = { travel };