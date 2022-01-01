const serviceCategoryServiceLayer = require('../src/service/serviceCategoryService.js');


var serviceCategoryAPI = (function singleController() {
    const createServiceCategory = function (req, res, next) {
        let category = {
            name: req.body.name,
            minDiscount: req.body.minDiscount,
            maxDiscount: req.body.maxDiscount,
            KEYMETERPRICE: req.body.KEYMETERPRICE,
        }
        let command = serviceCategoryServiceLayer.createServiceCategory(category, next);
        command.then(
            res.status(200).send({
                message: 'ServiceCategory created succesfully!'
            })
        );
    }

    return {
        createServiceCategory
    }
})();

module.exports = serviceCategoryAPI;