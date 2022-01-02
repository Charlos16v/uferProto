let SERVICECATEGORYDB = require('../../../db/memory/serviceCategoryDB.js');
let createServiceCategory = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryInMemoryDB() {
    
        const listServiceCategories = () => {
            return Promise.resolve(serialize(SERVICECATEGORYDB));
        };

    return {
        listServiceCategories
    };

})(); 

module.exports = serviceCategoryDataAcces;