const ufoVehicleDataAcces = require('../data-access/ufoVehicleDB/index.js');
const ufoServiceDataAcces = require('../data-access/ufoServiceDB/index.js');
const ufoVehicleProto = require('../domain/ufoVehicle/ufoVehicle.js');
const ufoVehicleProtoSerializer = require('../utils/protoSerializers/ufoVehicle.js');

const ufoVehicle = (function serviceLayer() {

    const add = async (ufoVehicleInfo) => {
        try {
            const ufoService = await ufoServiceDataAcces.findByProperty('id', ufoVehicleInfo.ufoService);
            if (!ufoService) {
                throw new Error("The ufoService doesn't exist.");
            }

            const data = ufoVehicleDataAcces.add(ufoVehicleInfo);

            if (!data) {
                throw new Error('It has not been possible to create the ufoVehicle.');
            }

            return data;
        } catch (error) {
            throw error;
        }
    };

    const reserveUfo = async (id) => {
        try {
            let ufoVehicleQuery = await ufoVehicleDataAcces.findByProperty('id', id);

            let ufoVehicle = ufoVehicleProtoSerializer(ufoVehicleQuery);

            if (ufoVehicle.reservation.reserved) {
                throw new Error("The ufoVehicle is already reserved.");
            }
            
            ufoVehicle.reserveUfo();
            return ufoVehicleDataAcces.update(ufoVehicle);
        } catch (error) {
            throw error;
        }
    };

    const calculateServicePrice = async (id) => {
        let ufoVehicle = await ufoVehicleDataAcces.findByProperty('id', id);
        ufoVehicle.calculateServicePrice();
        ufoServiceDataAcces.update(ufoVehicle.service);
        ufoVehicleDataAcces.update(ufoVehicle);
    };

    return {
        add,
        reserveUfo,
        calculateServicePrice
    };

})();

module.exports = ufoVehicle;