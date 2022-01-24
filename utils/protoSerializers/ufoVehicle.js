const ufoVehicleProto = require('../../domain/ufoVehicle/ufoVehicle.js');

const ufoServiceSerializer = require('./ufoService.js');

const serializeOne = (ufoVehicleInfo) => {

    let ufoServiceInfo = ufoVehicleInfo.ufoService;
    let ufoService = ufoServiceSerializer(ufoServiceInfo);

    let ufoVehicle = ufoVehicleProto.init(ufoVehicleInfo.model, ufoVehicleInfo.brand, ufoService,
        ufoVehicleInfo.driver, ufoVehicleInfo.reservation);
    ufoVehicle._id = ufoVehicleInfo.id;

    return ufoVehicle;
};

module.exports = serializeOne;