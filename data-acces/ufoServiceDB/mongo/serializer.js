const ufoServiceProto = require('../../../domain/ufoService/ufoService.js');

const _serializeSingle = (ufoServiceInfo) => {
  let ufoService = ufoServiceProto.init(ufoServiceInfo.name, ufoServiceInfo.description,
    ufoServiceInfo.journey, ufoServiceInfo.serviceCategory, ufoServiceInfo.amenities);
  ufoService._id = ufoServiceInfo._id;
  ufoService.price = ufoServiceInfo?.price

  return ufoService;
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