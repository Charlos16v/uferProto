let mongoose = require('../connection')

let Schema = mongoose.Schema
let UfoVehicleSchema = new Schema({
  model: String,
  brand: String,
  ufoService: { type: Schema.Types.ObjectId, ref: 'UfoService'},
  driver: String,
  reservation: {
      reserved: Boolean,
      reservationDate: Date
  }
}, {
  versionKey: false, // Quita la propiedad __v de los elementos de la collection.
  collection: 'ufoVehicles', // Forzamos nombre de la collection.
})

let UfoVehicle = mongoose.model('UfoVehicle', UfoVehicleSchema)

module.exports = UfoVehicle;