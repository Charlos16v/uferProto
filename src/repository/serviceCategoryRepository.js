const ServiceCategory = require('../../models/serviceCategory.js');

var serviceCategoryRepository = (function singleServiceCategoryRepository() {

    const createServiceCategory = function(category){

        ServiceCategory.create(category, function (err, awesome_instance) {
            if (err) return handleError(err);
            // saved! 
        });
    }

    return {
        createServiceCategory
    }
})();

module.exports = serviceCategoryRepository;
