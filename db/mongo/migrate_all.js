const { MongoClient } = require("mongodb");
let config = require('../../config')

// Collection seeders
const journeyCollection = require('./seed_collections/journey_collection.js');
const serviceCategoryCollection = require('./seed_collections/serviceCategory_collection.js');
const ufoServiceCollection = require('./seed_collections/ufoService_collection.js');
const ufoVehicleCollection = require('./seed_collections/ufoVehicle_collection.js');


const cluster = config.mongo.MONGO_CLUSTER;
const db_test = config.mongo.MONGO_DB_TEST;
const username = config.mongo.MONGO_USER;
const password = config.mongo.MONGO_PW;

const uri =
`mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db(db_test);

        // Collections in mongoDB
        const journeys = database.collection('journeys');
        const serviceCategories = database.collection('serviceCategories');
        const ufoServices = database.collection('ufoServices');
        const ufoVehicles = database.collection('ufoVehicles');


        let journeyDocs = await journeys.estimatedDocumentCount();
        if (journeyDocs > 0) {
            await journeys.drop().then((successMessage) => {
                console.log("Droped journeys " + successMessage);
            })
        }

        let serviceCategoryDocs = await serviceCategories.estimatedDocumentCount();
        if (serviceCategoryDocs > 0) {
            await serviceCategories.drop().then((successMessage) => {
                console.log("Droped serviceCategories " + successMessage);
            })
        }

        let ufoServiceDocs = await ufoServices.estimatedDocumentCount();
        if (ufoServiceDocs > 0) {
            await ufoServices.drop().then((successMessage) => {
                console.log("Droped ufoServices " + successMessage);
            })
        }

        let ufoVehicleDocs = await ufoVehicles.estimatedDocumentCount();
        if (ufoVehicleDocs > 0) {
            await ufoVehicles.drop().then((successMessage) => {
                console.log("Droped ufoVehicles " + successMessage);
            })
        }

        let result = await journeys.insertMany(journeyCollection);
        console.log(`Inserted ${result.insertedCount} journey docs.`);

        result = await serviceCategories.insertMany(serviceCategoryCollection);
        console.log(`Inserted ${result.insertedCount} serviceCategory docs.`);

        result = await ufoServices.insertMany(ufoServiceCollection);
        console.log(`Inserted ${result.insertedCount} ufoService docs.`);

        result = await ufoVehicles.insertMany(ufoVehicleCollection);
        console.log(`Inserted ${result.insertedCount} ufoVehicle docs.`);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);