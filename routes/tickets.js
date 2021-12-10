var express = require('express');
var router = express.Router();

const ticketsCtrl = require('./../controllers/tickets');

/* GET /flights/:id/tickets/new for new form */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;