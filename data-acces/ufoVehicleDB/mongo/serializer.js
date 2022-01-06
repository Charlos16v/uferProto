const _serializeSingle = (ufoVehicle) => {
    return {
      'id': ufoVehicle._id,
      'model': ufoVehicle.model,
      'brand': ufoVehicle.brand,
      'ufoService': ufoVehicle.ufoService,
      'driver': ufoVehicle.driver,
      'reservation': ufoVehicle.reservation
    };
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
  