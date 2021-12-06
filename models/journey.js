var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var journeySchema = new Schema({
    startPoint: {
        type: String,
        required: true
    },
    endPoint: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
})

//? TODO: pre y post hooks middlewares?

module.exports = mongoose.model('Journey', journeySchema);