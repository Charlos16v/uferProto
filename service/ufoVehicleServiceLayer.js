let ufoVehicleDataAcces = require('../data-acces/ufoVehicleDB/index.js');
let ufoVehicleProto = require('../domain/ufoVehicle/ufoVehicle.js');

const ufoVehicleServiceLayer = (function serviceLayer() {

    const reserveUfo = async (id) => {
        let ufoVehicle = await ufoVehicleDataAcces.findByProperty('id', id);
        ufoVehicle.reserveUfo();
        return ufoVehicleDataAcces.update(ufoVehicle);
    };

    return {
        reserveUfo
    };
    
})();

module.exports = ufoVehicleServiceLayer;

