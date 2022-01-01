const serviceCategoryProto = require('../domain/serviceCategory/serviceCategory.js');
const serviceCategoryRepository = require('../repository/serviceCategoryRepository.js');


var serviceCategoryServiceLayer = (function service() {
    
    const createServiceCategory = function(category, next) {
        //let category = serviceCategoryProto.init(name, min, max, price);
        return serviceCategoryRepository.createServiceCategory(category, next)
        .then();
    };

    return {
        createServiceCategory
    }
})();

module.exports = serviceCategoryServiceLayer;