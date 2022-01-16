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
        const query = UfoService.findOne(filter).populate({
            path: 'journey serviceCategory'
        });
        const doc = await query.exec()

        return serialize(doc);
    };

    const update = async (ufoService) => {
        const query = UfoService.findOne({
            '_id': ufoService._id
        });
        const doc = await query.exec();
        Object.assign(doc, ufoService);
        return await doc.save();
    };

    const add = (ufoServiceInfo) => {
        let ufoService = ufoServiceProto.init(ufoServiceInfo.name, 
            ufoServiceInfo.description, ufoServiceInfo.journey, 
            ufoServiceInfo.serviceCategory, ufoServiceInfo.amenities, 
            ufoServiceInfo.price, ufoServiceInfo.discountByCategory,
            ufoServiceInfo.KEYBASECOST);
        let newUfoService = {
            name: ufoService.name,
            description: ufoService.description,
            journey: ufoService.journey,
            serviceCategory: ufoService.serviceCategory,
            amenities: ufoService.amenities,
            price: ufoService.price,
            discountByCategory: ufoService.discountByCategory,
            KEYBASECOST: ufoService.KEYBASECOST
        };
        return UfoService.create(newUfoService)
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
        update,
        add,
        deleteById
    };

})();

module.exports = ufoServiceDataAcces;