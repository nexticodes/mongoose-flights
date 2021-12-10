let express = require('express');
let router = express.Router();

var destinationsCtrl = require('./../controllers/destinations');

/* POST /flights/:id/destinations */
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;