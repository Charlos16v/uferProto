require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  mongo: {
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PW: process.env.MONGO_PW,
    MONGO_DROPANDCREATE: process.env.MONGO_DROPANDCREATE
  },
  pg: {
    HOST: process.env.PG_HOST,
    USER: process.env.PG_USER,
    DATABASE: process.env.PG_DATABASE,
    PASSWORD: process.env.PG_PASSWORD,
    PORT: process.env.PG_PORT
  }
}