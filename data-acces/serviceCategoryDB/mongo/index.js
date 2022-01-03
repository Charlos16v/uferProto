let ServiceCategory = require('../../../db/mongo/models/serviceCategory.js');
let serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');
let serialize = require('./serializer.js');

const serviceCategoryDataAcces = (function serviceCategoryMongoDB() {

    const getAll = () => {
        return ServiceCategory.find({})
            .then(serialize)
    };

    const findByProperty = async (prop, val) => {
        if (prop === 'id') {
            prop = '_id'
        }
        let filter = {[prop]: val}
        const query = ServiceCategory.findOne(filter);
        const doc = await query.exec()
        
        return serialize(doc);
    };

    const add = (categoryInfo) => {
        let serviceCategory = serviceCategoryProto.init(categoryInfo.name, categoryInfo.minDiscount, categoryInfo.maxDiscount, categoryInfo.KEYMETERPRICE);
        let newServiceCategory = {
            name: serviceCategory.name,
            minDiscount: serviceCategory.minDiscount,
            maxDiscount: serviceCategory.maxDiscount,
            KEYMETERPRICE: serviceCategory.KEYMETERPRICE
        };
        return ServiceCategory.create(newServiceCategory)
            .then(serialize)
    };

    const deleteById = (id) => {
        return ServiceCategory.findByIdAndDelete(id)
            .then(resp => {
                return {
                    id: resp._id.toString(),
                    status: 'success'
                }
            })
            .catch(err => {
                return {
                    status: 'fail'
                }
            })
    };

    return {
        getAll,
        findByProperty,
        add,
        deleteById
    };

})();

module.exports = serviceCategoryDataAcces;