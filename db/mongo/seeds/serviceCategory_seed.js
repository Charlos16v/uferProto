let mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;
let ServiceCategory = require('../models/serviceCategory.js')
let config = require('../../../config')

// Seeder using async await
let seedDatabase = async function () {
  let standard = {
    _id: ObjectId("61ad67901dddd599e1d31e9d"),
    name: 'Standard',
    minDiscount: 10,
    maxDiscount: 7,
    KEYMETERPRICE: 8
  }

  let comfort = {
    _id: ObjectId("61ae6f5c0e9305ffcae3a986"),
    name: 'Comfort',
    minDiscount: 15,
    maxDiscount: 25,
    KEYMETERPRICE: 12
  }

  let premium = {
    _id: ObjectId("61aeab0c01ea7ea815ca8259"),
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