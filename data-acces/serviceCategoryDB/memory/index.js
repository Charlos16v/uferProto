let SERVICECATEGORYDB = require('../../../db/memory/serviceCategoryDB.js');
let createServiceCategory = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryInMemoryDB() {
    
        const getAll = () => {
            return Promise.resolve(serialize(SERVICECATEGORYDB));
        };

        const findByProperty = (prop, val) => {
            let serviceCategory = SERVICECATEGORYDB.find(cat => cat[prop] == val)
            return Promise.resolve(serialize(serviceCategory))
        };

    return {
        getAll,
        findByProperty
    };

})(); 

module.exports = serviceCategoryDataAcces;