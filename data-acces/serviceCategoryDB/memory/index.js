let SERVICECATEGORYDB = require('../../../db/memory/serviceCategoryDB.js');
let createServiceCategory = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryInMemoryDB() {
    
        const getAll = () => {
            return Promise.resolve(serialize(SERVICECATEGORYDB));
        };

    return {
        getAll
    };

})(); 

module.exports = serviceCategoryDataAcces;