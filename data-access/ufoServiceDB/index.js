let {
    getAll,
    findByProperty,
    add,
    update,
    deleteById
  } 
  // = require('./memory/index.js') // switch out db as required
  = require('./mongo/index.js')
  // = require('./pg/index.js')
  
  
  let ufoServiceDB = {
    getAll,
    findByProperty,
    update,
    add,
    deleteById
  }
  
  module.exports = ufoServiceDB;
  