var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var serviceCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
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
}, {
    collection: 'serviceCategories'
});

//schema middleware to apply before saving
serviceCategorySchema.pre('save', async function (next) {
    next();
});


const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

ServiceCategory.createIndexes();

//? TODO: pre y post hooks middlewares?

module.exports = ServiceCategory;