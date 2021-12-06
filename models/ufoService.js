var mongoose = require('mongoose');
var Journey = require('./journey.js');
var ServiceCategory = require('./serviceCategory.js');

var Schema = mongoose.Schema;

var ufoServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        //maxlength: 100
    },
    description: {
        type: String,
        required: true,
        //maxlength: 200
    },
    journey: {
        type: Schema.Types.ObjectId,
        ref: Journey.name,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: ServiceCategory.name,
        required: false
    },
    amenities: [String],
    price: {
        type: Number,
        required: false
    },
    discountByCategory: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('UfoService', ufoServiceSchema);