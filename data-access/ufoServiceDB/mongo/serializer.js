// const ufoServiceProto = require('../../../domain/ufoService/ufoService.js');
// const serviceCategorySerializer = require('../../serviceCategoryDB/mongo/serializer.js');
// const journeySerializer = require('../../journeyDB/mongo/serializer.js');

const _serializeSingle = (ufoServiceInfo) => {
  
  /* let journeyInfo = ufoServiceInfo.journey;
  let journey = journeySerializer(journeyInfo);

  let serviceCategoryInfo = ufoServiceInfo.serviceCategory;
  let serviceCategory = serviceCategorySerializer(serviceCategoryInfo);

  let ufoService = ufoServiceProto.init(ufoServiceInfo.name, ufoServiceInfo.description,
    journey, serviceCategory, ufoServiceInfo.amenities);
  ufoService._id = ufoServiceInfo._id;
  ufoService.price = ufoServiceInfo?.price;

  //console.log(ufoService); */

  return {
    'id': ufoServiceInfo._id,
    'name': ufoServiceInfo.name,
    'description': ufoServiceInfo.description,
    'journey': ufoServiceInfo.journey,
    'category': ufoServiceInfo.serviceCategory,
    'amenities': ufoServiceInfo.amenities,
    'KEYBASECOST': ufoServiceInfo.KEYBASECOST
  }
};

const serializer = (data) => {
    if (!data) {
      return null
    }
    return Array.isArray(data) ? data.map(_serializeSingle) : _serializeSingle(data);
};

module.exports = serializer;