module.exports = {
    index,
    show,
    new: newForm,
    create,
};

const Flight = require('../models/flight');

function index(req, res){
    Flight.find({}, function(err, flights){
        if (err) console.log(err);
        res.render('flights/index', { title: 'All Flights', flights});
    });
};

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', { title: `Viewing Flight#${flight.flightNo}`, flight});
    }); 
};

function newForm(req, res){
    res.render('flights/new', {title: 'Add Flight'});
};

function create(req, res){
    Flight.create(req.body, function(err, flight){
        if (err) console.log(err);
        res.redirect('/flights');
    });
};