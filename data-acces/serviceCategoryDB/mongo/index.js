let ServiceCategory = require('../../../db/mongo/models/serviceCategory.js');
let serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryMongoDB() {
    
    const getAll = () => {
        return ServiceCategory.find({})
        .then(serialize)
    };

    const findByProperty = (prop, val) => {
        
    };

    const addServiceCategory = (categoryInfo) => {
        
    };

    const deleteServiceCategoryById = (id) => {

    };

return {
    getAll,
    findByProperty,
    addServiceCategory,
    deleteServiceCategoryById
};

})();

module.exports = serviceCategoryDataAcces;