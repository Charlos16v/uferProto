let mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;
let UfoVehicle = require('../models/ufoVehicle.js')
let config = require('../../../config')

// Seeder using async await
let seedDatabase = async function () {
  let spaceXXX = {
    model: 'XXX',
    brand: 'Space',
    ufoService: ObjectId("61b0f513646886f408bd0777"),
    driver: 'MasterMachine',
    reservation: {
        reserved: false,
        reservationDate: null
    }
  }

  await UfoVehicle.create(spaceXXX)
};

// Drop DB then seed only if MONGO_DROPANDCREATE=true
if (config.mongo.MONGO_DROPANDCREATE) {
  UfoVehicle.collection.drop(async function () {
    await seedDatabase()
    mongoose.connection.close()
  });
}