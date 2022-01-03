let SERVICECATEGORYDB = require('../../../db/memory/serviceCategoryDB.js');
let serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryInMemoryDB() {
    
        const getAll = () => {
            return Promise.resolve(serialize(SERVICECATEGORYDB));
        };

        const findByProperty = (prop, val) => {
            let serviceCategory = SERVICECATEGORYDB.find(cat => cat[prop] == val)
            return Promise.resolve(serialize(serviceCategory))
        };

        const addServiceCategory = (categoryInfo) => {
            let serviceCategory = serviceCategoryProto.init(categoryInfo.name, categoryInfo.minDiscount, categoryInfo.maxDiscount, categoryInfo.KEYMETERPRICE);
            let newServiceCategory = {
                id: SERVICECATEGORYDB.length + 1,
                name: serviceCategory.name,
                minDiscount: serviceCategory.minDiscount,
                maxDiscount: serviceCategory.maxDiscount,
                KEYMETERPRICE: serviceCategory.KEYMETERPRICE
            };
            SERVICECATEGORYDB.push(newServiceCategory);
            return findByProperty('id', newServiceCategory.id);
        };

        const deleteServiceCategoryById = (id) => {
            return findByProperty('id', id)
              .then(cat => {
                if (cat.id == id) {
                    SERVICECATEGORYDB = SERVICECATEGORYDB.filter(cat => cat.id != id)
                  return {
                    id,
                    status: 'success'
                  }
                }
                return {
                  status: 'fail'
                }
              })
        };

    return {
        getAll,
        findByProperty,
        addServiceCategory,
        deleteServiceCategoryById
    };

})(); 

module.exports = serviceCategoryDataAcces;