const serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');

const _serializeSingle = (serviceCategoryInfo) => {
  let serviceCategory = serviceCategoryProto.init(serviceCategoryInfo.name, serviceCategoryInfo.minDiscount,
    serviceCategoryInfo.maxDiscount, serviceCategoryInfo.KEYMETERPRICE);
  serviceCategory._id = serviceCategoryInfo._id;

  return serviceCategory;
};

const serializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
}

module.exports = serializer