const express = require('express');
const router = express.Router();

const serviceCategoryController = require('../../../controllers/serviceCategoryController');

router
    .get('/serviceCategory', serviceCategoryController.getAll)
    .get('/serviceCategory/:prop/:value', serviceCategoryController.findByProperty)
    .put('/serviceCategory', serviceCategoryController.addServiceCategory)
    .delete('/serviceCategory/:id', serviceCategoryController.deleteServiceCategoryById)

module.exports = router;