let mongoose = require('mongoose')
let ServiceCategory = require('../models/serviceCategory.js')
let config = require('../../../config')

// Seeder using async await
let seedDatabase = async function () {
  let standard = {
    name: 'Standard',
    minDiscount: 10,
    maxDiscount: 7,
    KEYMETERPRICE: 8
  }

  let comfort = {
    name: 'Comfort',
    minDiscount: 15,
    maxDiscount: 25,
    KEYMETERPRICE: 12
  }

  let premium = {
    name: "Premium",
    minDiscount: 10,
    maxDiscount: 40,
    KEYMETERPRICE: 20
  }

  await ServiceCategory.create(standard)
  await ServiceCategory.create(comfort)
  await ServiceCategory.create(premium)
};

// Drop DB then seed only if MONGO_DROPANDCREATE=true
if (config.mongo.MONGO_DROPANDCREATE) {
  ServiceCategory.collection.drop(async function () {
    await seedDatabase()
    mongoose.connection.close()
  });
}