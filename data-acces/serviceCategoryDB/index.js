let {
    getAll,
    findByProperty,
    addServiceCategory,
    deleteServiceCategoryById
  } 
  // = require('./memory/index.js') // switch out db as required
  = require('./mongo/index.js')
  // = require('./pg/index.js')
  
  
  let serviceCategoryDB = {
    getAll,
    findByProperty,
    addServiceCategory,
    deleteServiceCategoryById
  }
  
  module.exports = serviceCategoryDB
  