let mongoose = require('../connection')

let Schema = mongoose.Schema
let JourneySchema = new Schema({
  startPoint: String,
  endPoint: String,
  distance: Number
}, {
  versionKey: false, // Quita la propiedad __v de los elementos de la collection.
  collection: 'journeys', // Forzamos nombre de la collection.
})

let Journey = mongoose.model('Journey', JourneySchema)

module.exports = Journey;