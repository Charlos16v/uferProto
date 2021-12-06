const serviceCategoryProto = require('../domain/serviceCategory/serviceCategory.js');
const serviceCategoryRepository = require('../repository/serviceCategoryRepository.js');


var serviceCategoryServiceLayer = (function service() {
    
    const createServiceCategory = function(name, min, max, price) {
        let category = serviceCategoryProto.init(name, min, max, price);
        serviceCategoryRepository.createServiceCategory(category);
    };

    return {
        createServiceCategory
    }
})();

module.exports = serviceCategoryServiceLayer;