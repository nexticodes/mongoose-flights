module.exports = {
    index,
    new: newForm,
}

const Flight = require('../models/flight');

function index(req, res){
    res.render('flights/index', { title: 'All Flights'});
}

function newForm(req, res){
    res.render('flights/new', {title: 'Add Flight'})
}