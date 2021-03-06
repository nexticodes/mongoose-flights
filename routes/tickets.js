var express = require('express');
var router = express.Router();

const ticketsCtrl = require('./../controllers/tickets');

/* POST / DELETE tickets/:id */
router.delete('/tickets/:id', ticketsCtrl.delete);

/* GET /flights/:id/tickets/new for new form */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

/* POST /flights/:id/tickets */
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;