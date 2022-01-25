const journeyProto = require('../../domain/journey/journey.js');

const serializeOne = (journeyInfo) => {
  let journey = journeyProto.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
  journey._id = journeyInfo.id;

  return journey;
};

module.exports = serializeOne;