var express = require('express');
var router = express.Router();

/* GET flights listing. */
router.get('/', function(req, res, next) {
  res.render('flights/index', { title: 'All Flights'});
});

module.exports = router;
