const _serializeSingle = (journey) => {
    return {
      'id': journey._id,
      'startPoint': journey.startPoint,
      'endPoint': journey.endPoint,
      'distance': journey.distance
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
  