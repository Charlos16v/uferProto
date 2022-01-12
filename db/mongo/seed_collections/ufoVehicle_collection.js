const ObjectId = require('mongodb').ObjectId;

module.exports = [{
    _id: ObjectId("61b0f513646886f408bd0888"),
    model: 'XXX',
    brand: 'Space',
    ufoService: ObjectId("61b0f513646886f408bd0777"),
    driver: 'MasterMachine',
    reservation: {
        reserved: false,
        reservationDate: null
    }
}]