const ufoVehicleProto = require('../../../domain/ufoVehicle/ufoVehicle.js');
const ufoServiceProto = require('../../../domain/ufoService/ufoService.js');
const serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');
const journeyProto = require('../../../domain/journey/journey.js');

const _serializeSingle = (ufoVehicleInfo) => {
  /*return {
    'id': ufoVehicle._id,
    'model': ufoVehicle.model,
    'brand': ufoVehicle.brand,
    'ufoService': ufoVehicle.ufoService,
    'driver': ufoVehicle.driver,
    'reservation': ufoVehicle.reservation
  };*/

  let journeyInfo = ufoVehicleInfo.ufoService.journey;
  let journey = journeyProto.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
  journey._id = journeyInfo._id;

  let serviceCategoryInfo = ufoVehicleInfo.ufoService.serviceCategory;
  let serviceCategory = serviceCategoryProto.init(serviceCategoryInfo.name, serviceCategoryInfo.minDiscount,
    serviceCategoryInfo.maxDiscount, serviceCategoryInfo.KEYMETERPRICE);
  serviceCategory._id = serviceCategoryInfo._id;

  let ufoServiceInfo = ufoVehicleInfo.ufoService;
  let ufoService = ufoServiceProto.init(ufoServiceInfo.name, ufoServiceInfo.description,
    journey, serviceCategory, ufoServiceInfo.amenities);
  ufoService._id = ufoServiceInfo._id;

  let ufoVehicle = ufoVehicleProto.init(ufoVehicleInfo.model, ufoVehicleInfo.brand, ufoService,
    ufoVehicleInfo.driver, ufoVehicleInfo.reservation);
    ufoVehicle._id = ufoVehicleInfo._id;

  return ufoVehicle;
};

const serializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
};

module.exports = serializer;