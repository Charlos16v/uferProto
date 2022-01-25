exports.seed = async function (knex) {
    await knex.raw('DELETE FROM ServiceCategories')
  
    await knex.raw('ALTER SEQUENCE ServiceCategories_id_seq RESTART WITH 1')
  
    await knex.raw(`
      INSERT INTO ServiceCategories (name, minDiscount, maxDiscount, KEYMETERPRICE) VALUES
      ('Standard', 10, 7, 8),
      ('Comfort', 15, 25, 12),
      ('Premium', 10, 40, 20)
    `)
  };