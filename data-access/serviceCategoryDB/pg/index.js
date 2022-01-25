let knex = require('../../../db/pg/knex')
let serviceCategoryProto = require('../../../domain/serviceCategory/serviceCategory.js');

const serviceCategoryDataAcces = (function serviceCategoryPostgresSQL() {

  const getAll = () => {
    return knex.raw(`SELECT * FROM servicecategories;`)
      .then(data => data.rows)
  }

  const findByProperty = (prop, val) => {
    return knex.raw(`
        SELECT * FROM servicecategories WHERE ${prop}= '${val}'
      `)
      .then(data => data.rows[0])
  }

  const add = async (categoryInfo) => {
    let serviceCategory = serviceCategoryProto.init(categoryInfo.name, categoryInfo.minDiscount, categoryInfo.maxDiscount, categoryInfo.KEYMETERPRICE);
    let newServiceCategory = {
      name: serviceCategory.name,
      minDiscount: serviceCategory.minDiscount,
      maxDiscount: serviceCategory.maxDiscount,
      KEYMETERPRICE: serviceCategory.KEYMETERPRICE
    };

    return knex.raw(`INSERT INTO servicecategories (name, minDiscount, maxDiscount, KEYMETERPRICE) VALUES ('${serviceCategory.name}', ${serviceCategory.minDiscount}, ${serviceCategory.maxDiscount}, ${serviceCategory.KEYMETERPRICE}) RETURNING *;`)
      .then(data => data.rows[0])

    /*
    return knex('servicecategories')
      .insert({name: serviceCategory.name,
        minDiscount: serviceCategory.minDiscount,
        maxDiscount: serviceCategory.maxDiscount,
        KEYMETERPRICE: serviceCategory.KEYMETERPRICE})
      .returning('*')
      .then(result => result[0]);
      */
  }

  const deleteById = async (id) => {
    return knex('servicecategories')
      .where('id', id)
      .del()
      .then(resp => {
        if (resp == 1) {
          return {
            id,
            status: 'success'
          }
        }
        return {
          status: 'fail'
        }
      })
  }

  const dropAll = () => {
    return knex.raw(`
        DELETE FROM ServiceCategories;
        ALTER SEQUENCE ServiceCategories_id_seq RESTART WITH 1;
      `)
  }

  return {
    getAll,
    findByProperty,
    add,
    deleteById
  };

})();

module.exports = serviceCategoryDataAcces;