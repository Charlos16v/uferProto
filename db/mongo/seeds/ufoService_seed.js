let mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;
let UfoService = require('../models/ufoService.js')
let config = require('../../../config')

// Seeder using async await
let seedDatabase = async function () {
  let gold = {
    name: 'UferGold',
    description: 'The best service',
    journey: ObjectId("61b0f513646886f408bd0731"),
    serviceCategory: ObjectId("61aeab0c01ea7ea815ca8259"),
    amenities: ['kitkat', 'cola'],
    KEYBASECOST: 40
  }

  let daily = {
    name: 'UferGold',
    description: 'The best service',
    journey: ObjectId("61b0f513646886f408bd0731"),
    serviceCategory: ObjectId("61aeab0c01ea7ea815ca8259"),
    amenities: ['kitkat', 'cola'],
    KEYBASECOST: 40
  }

  await UfoService.create(gold)
  // await UfoService.create(daily)
};

// Drop DB then seed only if MONGO_DROPANDCREATE=true
if (config.mongo.MONGO_DROPANDCREATE) {
  UfoService.collection.drop(async function () {
    await seedDatabase()
    mongoose.connection.close()
  });
}