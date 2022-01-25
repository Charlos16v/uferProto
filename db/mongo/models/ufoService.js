let mongoose = require('../connection')

let Schema = mongoose.Schema
let UfoServiceSchema = new Schema({
  name: String,
  description: String,
  journey: { type: Schema.Types.ObjectId, ref: 'Journey'},
  serviceCategory: { type: Schema.Types.ObjectId, ref: 'ServiceCategory'},
  amenities: [String],
  price: Number,
  discountByCategory: Number,
  KEYBASECOST: Number
}, {
  versionKey: false, // Quita la propiedad __v de los elementos de la collection.
  collection: 'ufoServices', // Forzamos nombre de la collection.
})

let UfoService = mongoose.model('UfoService', UfoServiceSchema)

module.exports = UfoService;