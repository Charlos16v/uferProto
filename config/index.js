require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  mongo: {
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_DB_TEST: process.env.MONGO_DB_TEST,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PW: process.env.MONGO_PW,
    MONGO_DROPANDCREATE: process.env.MONGO_DROPANDCREATE
  },
  pg: {
    PG_HOST: process.env.PG_HOST,
    PG_USER: process.env.PG_USER,
    PG_DATABASE: process.env.PG_DATABASE,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_PORT: process.env.PG_PORT
  }
}