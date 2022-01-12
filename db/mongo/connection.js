let config = require('../../config')
let mongoose = require('mongoose');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
//mongoose.set('useNewUrlParser', true);
// Set environment variables
let env = process.env.NODE_ENV;

const cluster = config.mongo.MONGO_CLUSTER
const username = config.mongo.MONGO_USER
const password = config.mongo.MONGO_PW
if (env === 'production') {
  const db = config.mongo.MONGO_DB
  mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${db}?retryWrites=true&w=majority`)

} else {
  const db_test = config.mongo.MONGO_DB_TEST
  mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${db_test}?retryWrites=true&w=majority`)
}

// Signal connection
mongoose.connection.once('open', function () {
  console.log('Connection has been made');
}).on('error', function (error) {
  console.log('Connect error', error);
}).on('disconnected', function () {
  console.log('Connection disconnected');
})

module.exports = mongoose