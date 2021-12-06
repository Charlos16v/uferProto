const serviceCategoryServiceLayer = require('../src/service/serviceCategoryService.js');


var serviceCategoryAPI = (function singleController() {
    const createServiceCategory = function(req, res) {
        serviceCategoryServiceLayer.createServiceCategory(
            req.body.name,
            req.body.minDiscount,
            req.body.maxDiscount,
            req.body.KEYMETERPRICE
        );
        res.status(200).send({
            message: 'ServiceCategory created succesfully!'
        });
    }

    return {
        createServiceCategory
    }
})();

module.exports = serviceCategoryAPI;