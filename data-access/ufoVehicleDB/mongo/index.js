let UfoVehicle = require('../../../db/mongo/models/ufoVehicle.js');
let ufoVehicleProto = require('../../../domain/ufoVehicle/ufoVehicle.js');
let serialize = require('./serializer.js');

const ufoVehicleDataAcces = (function ufoVehicleMongoDB() {

    const getAll = () => {
        return UfoVehicle
            .find({})
            .populate({
                path: 'ufoService',
                populate: {
                    path: 'journey serviceCategory'
                },
            })
            .then(serialize)
    };

    const findByProperty = async (prop, val) => {
        if (prop === 'id') {
            prop = '_id'
        }
        let filter = {
            [prop]: val
        }
        const query = UfoVehicle.findOne(filter).populate({
            path: 'ufoService',
            populate: {
                path: 'journey serviceCategory'
            },
        });
        const doc = await query.exec()

        return serialize(doc);
    };

    const update = async (ufoVehicle) => {
        const query = UfoVehicle.findOne({
            '_id': ufoVehicle._id
        }).populate({
            path: 'ufoService',
            populate: {
                path: 'journey serviceCategory'
            },
        });
        const doc = await query.exec();
        Object.assign(doc, ufoVehicle);
        return await doc.save();
    };

    const add = (ufoVehicleInfo) => {
        let ufoVehicle = ufoVehicleProto.init(
            ufoVehicleInfo.model, ufoVehicleInfo.brand,
            ufoVehicleInfo.ufoService, ufoVehicleInfo.driver);
        let newUfoVehicle = {
            model: ufoVehicle.model,
            brand: ufoVehicle.brand,
            ufoService: ufoVehicle.service,
            driver: ufoVehicle.driver,
            reservation: ufoVehicle.reservation,
        };
        return UfoVehicle.create(newUfoVehicle)
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
        update,
        add,
        deleteById
    };

})();

module.exports = ufoVehicleDataAcces;