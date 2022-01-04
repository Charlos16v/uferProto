const express = require('express');
const router = express.Router();

const serviceCategoryController = require('../../../controllers/serviceCategoryController');
const journeyController = require('../../../controllers/journeyController');
const ufoServiceController = require('../../../controllers/ufoServiceController');

// serviceCategory
router
    .get('/serviceCategory', serviceCategoryController.getAll)
    .get('/serviceCategory/:prop/:value', serviceCategoryController.findByProperty)
    .put('/serviceCategory', serviceCategoryController.add)
    .delete('/serviceCategory/:id', serviceCategoryController.deleteById);

// journey
router
.get('/journey', journeyController.getAll)
.get('/journey/:prop/:value', journeyController.findByProperty)
.put('/journey', journeyController.add)
.delete('/journey/:id', journeyController.deleteById);

// ufoService
router
.get('/ufoService', ufoServiceController.getAll)
.get('/ufoService/:prop/:value', ufoServiceController.findByProperty)
.put('/ufoService', ufoServiceController.add)
.delete('/ufoService/:id', ufoServiceController.deleteById)


module.exports = router;