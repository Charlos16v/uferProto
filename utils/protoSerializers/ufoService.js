const ufoServiceProto = require('../../domain/ufoService/ufoService.js');
const serviceCategorySerializer = require('./serviceCategory.js');
const journeySerializer = require('./journey.js');

const serializeOne = (ufoServiceInfo) => {

    let journeyInfo = ufoServiceInfo.journey;
    let journey = journeySerializer(journeyInfo);

    let serviceCategoryInfo = ufoServiceInfo.serviceCategory;
    let serviceCategory = serviceCategorySerializer(serviceCategoryInfo);

    let ufoService = ufoServiceProto.init(ufoServiceInfo.name, ufoServiceInfo.description,
        journey, serviceCategory, ufoServiceInfo.amenities);
    ufoService._id = ufoServiceInfo.id;
    ufoService.price = ufoServiceInfo?.price;

    return ufoService;
};


module.exports = serializeOne;