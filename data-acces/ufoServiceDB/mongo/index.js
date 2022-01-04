let UfoService = require('../../../db/mongo/models/ufoService.js');
let ufoServiceProto = require('../../../domain/ufoService/ufoService.js');
let serialize = require('./serializer.js');

const ufoServiceDataAcces = (function ufoServiceMongoDB() {

    const getAll = () => {
        return UfoService
            .find({})
            .populate('journey')
            .populate('serviceCategory')
            .then(serialize)
    };

    const findByProperty = async (prop, val) => {
        if (prop === 'id') {
            prop = '_id'
        }
        let filter = {
            [prop]: val
        }
        const query = UfoService.findOne(filter);
        const doc = await query.exec()

        return serialize(doc);
    };

    const add = (journeyInfo) => {
        let journey = UfoService.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
        let newJourney = {
            startPoint: journey.startPoint,
            endPoint: journey.endPoint,
            distance: journey.distance
        };
        return Journey.create(newJourney)
            .then(serialize)
    };

    const deleteById = (id) => {
        return UfoService.findByIdAndDelete(id)
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

module.exports = ufoServiceDataAcces;