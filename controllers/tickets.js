module.exports = {
    new: newTicket,
    create,
    delete: removeTicket
};

const Ticket = require('./../models/ticket');

function newTicket(req, res){
    res.render('tickets/new', { title: `Add Ticket`, flightNo: req.params.id })
};

function create(req, res){
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err){
        res.redirect(`/flights/${req.params.id}`);
    });
};

function removeTicket(req, res){
    Ticket.deleteOne({_id: req.params.id }, function(err){
        res.redirect(`/flights/${req.body.flightId}`)
    });
};