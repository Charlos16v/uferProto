var express = require('express');
var router = express.Router();

var serviceCategoryController = require('../controllers/serviceCategoryController.js');


// ROUTER LEVEL MIDDLEWARE
router.use(function (req, res, next) {
    console.log(req.url);
    console.log(req.body);
    console.log(req.params);

    next();
});

router.post('/add', serviceCategoryController.createServiceCategory);


module.exports = router;


