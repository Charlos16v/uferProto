const ObjectId = require('mongodb').ObjectId;

module.exports = [{
        _id: ObjectId("61ad67901dddd599e1d31e9d"),
        name: 'Standard',
        minDiscount: 10,
        maxDiscount: 7,
        KEYMETERPRICE: 8
    },
    {
        _id: ObjectId("61ae6f5c0e9305ffcae3a986"),
        name: 'Comfort',
        minDiscount: 15,
        maxDiscount: 25,
        KEYMETERPRICE: 12
    },
    {
        _id: ObjectId("61aeab0c01ea7ea815ca8259"),
        name: "Premium",
        minDiscount: 10,
        maxDiscount: 40,
        KEYMETERPRICE: 20
    }
]