const _serializeSingle = (ufoService) => {
    return {
      'id': ufoService._id,
      'name': ufoService.startPoint,
      'description': ufoService.description,
      'journey': ufoService.journey,
      'serviceCategory': ufoService.serviceCategory,
      'amenities': ufoService.amenities,
      'price': ufoService.price,
      'discountByCategory': ufoService.discountByCategory,
      'KEYBASECOST': ufoService.KEYBASECOST
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
  