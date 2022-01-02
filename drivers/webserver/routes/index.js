const express = require('express');
const router = express.Router();

const serviceCategoryController = require('../../../controllers/serviceCategoryController');

router
    .get('/serviceCategory', serviceCategoryController.index)

module.exports = router;