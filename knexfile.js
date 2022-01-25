let config = require('./config/index')
// In terminal open psql and create a new database. Then include the name of the database and your username and password in the development details below
// Run the following terminal command
// $ psql
// # CREATE DATABASE nameofyourdatabase;
// Note: remember the semicolon syntax
// # \q
module.exports = {
  dev: {
    client: 'pg',
    connection: {
      host: config.pg.PG_HOST,
      user: config.pg.PG_USER,
      password: config.pg.PG_PASSWORD,
      database: config.pg.PG_DATABASE,
      port: config.pg.PG_PORT,
      // ssl: true
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    },
    seeds: {
      directory: __dirname + '/db/pg/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: config.pg.PG_HOST,
      user: config.pg.PG_USER,
      password: config.pg.PG_PASSWORD,
      database: config.pg.PG_DATABASE,
      port: config.pg.PG_PORT,
      ssl: true
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    },
    seeds: {
      directory: __dirname + '/db/pg/seeds'
    }
  }
};

/* COMMANDS
npm install knex 
npm install pg --save 

npx knex migrate:make servicesCategoriesTable
npx knex migrate:latest  

npx knex seed:run

*/