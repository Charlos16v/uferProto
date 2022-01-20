let ufoVehicleDataAcces = require('../data-acces/ufoVehicleDB/index.js');
let ufoServiceDataAcces = require('../data-acces/ufoServiceDB/index.js');
let ufoVehicleProto = require('../domain/ufoVehicle/ufoVehicle.js');

const ufoVehicle = (function serviceLayer() {

    const reserveUfo = async (id) => {
        let ufoVehicle = await ufoVehicleDataAcces.findByProperty('id', id);
        ufoVehicle.reserveUfo();
        return ufoVehicleDataAcces.update(ufoVehicle);
    };

    const calculateServicePrice = async (id) => {
        let ufoVehicle = await ufoVehicleDataAcces.findByProperty('id', id);
        ufoVehicle.calculateServicePrice();
        ufoServiceDataAcces.update(ufoVehicle.service);
        ufoVehicleDataAcces.update(ufoVehicle);
    }; 

    return {
        reserveUfo,
        calculateServicePrice
    };
    
})();

module.exports = ufoVehicleServiceLayer;

