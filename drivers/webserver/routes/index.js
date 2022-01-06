const express = require('express');
const router = express.Router();

const serviceCategoryController = require('../../../controllers/serviceCategoryController');
const journeyController = require('../../../controllers/journeyController');
const ufoServiceController = require('../../../controllers/ufoServiceController');
const ufoVehicleController = require('../../../controllers/ufoVehicleController');

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
.delete('/ufoService/:id', ufoServiceController.deleteById);

// ufoVehicle
router
.get('/ufoVehicle', ufoVehicleController.getAll)
.get('/ufoVehicle/:prop/:value', ufoVehicleController.findByProperty)
.put('/ufoVehicle', ufoVehicleController.add)
.delete('/ufoVehicle/:id', ufoVehicleController.deleteById);


module.exports = router;