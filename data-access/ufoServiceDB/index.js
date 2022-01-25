const {
  getAll,
  findByProperty,
  add,
  update,
  deleteById
}
// = require('./memory/index.js') // switch out db as required
= require('./mongo/index.js')
// = require('./pg/index.js')


const ufoServiceDB = {
  getAll,
  findByProperty,
  update,
  add,
  deleteById
}

module.exports = ufoServiceDB;