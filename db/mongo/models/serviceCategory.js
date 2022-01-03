let mongoose = require('../connection')

let Schema = mongoose.Schema
let ServiceCategorySchema = new Schema({
  name: String,
  minDiscount: Number,
  maxDiscount: Number,
  KEYMETERPRICE: Number
}, {
  versionKey: false, // Quita la propiedad __v de los elementos de la collection.
})

let ServiceCategory = mongoose.model('ServiceCategory', ServiceCategorySchema)

module.exports = ServiceCategory;