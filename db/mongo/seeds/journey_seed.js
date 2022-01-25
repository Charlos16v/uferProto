let mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;
let Journey = require('../models/journey.js')
let config = require('../../../config')

// Seeder using async await
let seedDatabase = async function () {
  let murciaMarbella = {
    _id: ObjectId("61b0f513646886f408bd0730"),
    startPoint: 'MurciaGalaxy',
    endPoint: 'MarbellaFresh',
    distance: 1000
  }

  let galiciaMarbella = {
    _id: ObjectId("61b0f513646886f408bd0731"),
    startPoint: 'GalicianAlps',
    endPoint: 'MarbellaFresh',
    distance: 1440
  }

  await Journey.create(murciaMarbella)
  await Journey.create(galiciaMarbella)
};

// Drop DB then seed only if MONGO_DROPANDCREATE=true
if (config.mongo.MONGO_DROPANDCREATE) {
  Journey.collection.drop(async function () {
    await seedDatabase()
    mongoose.connection.close()
  });
}