const ufoVehicleProto = require('../../../domain/ufoVehicle/ufoVehicle.js');

const ufoServiceSerializer = require('../../ufoServiceDB/mongo/serializer.js');
const serviceCategorySerializer = require('../../serviceCategoryDB/mongo/serializer.js');
const journeySerializer = require('../../journeyDB/mongo/serializer.js');

const _serializeSingle = (ufoVehicleInfo) => {

  let journeyInfo = ufoVehicleInfo.ufoService.journey;
  let journey = journeySerializer(journeyInfo);

  let serviceCategoryInfo = ufoVehicleInfo.ufoService.serviceCategory;
  let serviceCategory = serviceCategorySerializer(serviceCategoryInfo);

  let ufoServiceInfo = ufoVehicleInfo.ufoService;
  let ufoService = ufoServiceSerializer(ufoServiceInfo);

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