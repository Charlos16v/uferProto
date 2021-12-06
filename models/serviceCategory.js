var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var serviceCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        //maxlength: 100
    },
    minDiscount: {
        type: Number,
        required: true
    },
    maxDiscount: {
        type: Number,
        required: true
    },
    KEYMETERPRICE: {
        type: Number,
        required: true
    }
});

//? TODO: pre y post hooks middlewares?

module.exports = mongoose.model('ServiceCategory', serviceCategorySchema);