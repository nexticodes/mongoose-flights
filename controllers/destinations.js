module.exports = {
    create
};

const Flight = require('./../models/flight');

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        if (err) return res.redirect('/');
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        })
    });
};