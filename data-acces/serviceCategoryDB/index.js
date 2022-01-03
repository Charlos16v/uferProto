let {
    getAll,
    findByProperty,
    addServiceCategory
  } 
  = require('./memory/index.js') // switch out db as required
  // = require('./mongo/index.js')
  // = require('./pg/index.js')
  
  
  let serviceCategoryDB = {
    getAll,
    findByProperty,
    addServiceCategory
  }
  
  module.exports = serviceCategoryDB
  