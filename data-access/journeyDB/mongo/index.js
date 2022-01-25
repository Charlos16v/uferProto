let Journey = require('../../../db/mongo/models/journey.js');
let journeyProto = require('../../../domain/journey/journey.js');
let serialize = require('./serializer.js');

const journeyDataAcces = (function journeyMongoDB() {

    const getAll = () => {
        return Journey.find({})
            .then(serialize)
    };

    const findByProperty = async (prop, val) => {
        if (prop === 'id') {
            prop = '_id'
        }
        let filter = {[prop]: val}
        const query = Journey.findOne(filter);
        const doc = await query.exec()
        
        return serialize(doc);
    };

    const add = (journeyInfo) => {
        let journey = journeyProto.init(journeyInfo.startPoint, journeyInfo.endPoint, journeyInfo.distance);
        let newJourney = {
            startPoint: journey.startPoint,
            endPoint: journey.endPoint,
            distance: journey.distance
        };
        return Journey.create(newJourney)
            .then(serialize)
    };

    const deleteById = (id) => {
        return Journey.findByIdAndDelete(id)
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

module.exports = journeyDataAcces;