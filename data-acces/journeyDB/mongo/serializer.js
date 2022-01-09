const journeyProto = require('../../../domain/journey/journey.js');

const _serializeSingle = (journeyInfo) => {
  let journey = journeyProto.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
  journey._id = journeyInfo._id;

  return journey;
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