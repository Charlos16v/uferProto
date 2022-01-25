const serviceCategoryProto = require('../../domain/serviceCategory/serviceCategory.js');

const serializeOne = (serviceCategoryInfo) => {

    let serviceCategory = serviceCategoryProto.init(serviceCategoryInfo.name, serviceCategoryInfo.minDiscount,
        serviceCategoryInfo.maxDiscount, serviceCategoryInfo.KEYMETERPRICE);
    serviceCategory._id = serviceCategoryInfo.id;

    return serviceCategory;
};

module.exports = serializeOne;