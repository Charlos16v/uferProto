const _serializeSingle = (serviceCategory) => {
    return {
      'id': serviceCategory._id,
      'name': serviceCategory.name,
      'minDiscount': serviceCategory.minDiscount,
      'maxDiscount': serviceCategory.maxDiscount,
      'KEYMETERPRICE': serviceCategory.KEYMETERPRICE
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
  