const ObjectId = require('mongodb').ObjectId;

module.exports = [{
    _id: ObjectId("61b0f513646886f408bd0777"),
    name: 'UferGold',
    description: 'The best service',
    journey: ObjectId("61b0f513646886f408bd0731"),
    serviceCategory: ObjectId("61aeab0c01ea7ea815ca8259"),
    amenities: ['kitkat', 'cola'],
    KEYBASECOST: 40
}]