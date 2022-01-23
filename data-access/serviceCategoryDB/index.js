let {
    getAll,
    findByProperty,
    add,
    deleteById
  } 
  // = require('./memory/index.js') // switch out db as required
  = require('./mongo/index.js')
  // = require('./pg/index.js')
  
  
  let serviceCategoryDB = {
    getAll,
    findByProperty,
    add,
    deleteById
  }
  
  module.exports = serviceCategoryDB
  