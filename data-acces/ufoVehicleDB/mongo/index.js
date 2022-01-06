let UfoVehicle = require('../../../db/mongo/models/ufoVehicle.js');
let ufoVehicleProto = require('../../../domain/ufoVehicle/ufoVehicle.js');
let serialize = require('./serializer.js');

const ufoVehicleDataAcces = (function ufoVehicleMongoDB() {

    const getAll = () => {
        return UfoVehicle
            .find({})
            .populate('ufoService')
            .then(serialize)
    };

    const findByProperty = async (prop, val) => {
        if (prop === 'id') {
            prop = '_id'
        }
        let filter = {
            [prop]: val
        }
        const query = UfoVehicle.findOne(filter);
        const doc = await query.exec()

        return serialize(doc);
    };

    const add = (ufoVehicleInfo) => {
        let ufoVehicle = ufoVehicleProto.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
        let newUfoVehicle = {
            model: journey.model,
            brand: journey.brand,
            ufoService: journey.ufoService,
            driver: newUfoVehicle.driver,
            reservation: newUfoVehicle.reservation,
        };
        return UfoVehicle.create(newJourney)
            .then(serialize)
    };

    const deleteById = (id) => {
        return UfoVehicle.findByIdAndDelete(id)
            .then(resp => {
                return {
                    id: resp._id.toString(),
                    status: 'success'
                }
            })
            .catch(err => {
                return {
                    status: 'fail'
                }
            })
    };

    return {
        getAll,
        findByProperty,
        add,
        deleteById
    };

})();

module.exports = ufoVehicleDataAcces;