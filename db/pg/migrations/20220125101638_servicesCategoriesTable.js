/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
    CREATE TABLE ServiceCategories (
      id serial PRIMARY KEY,
      name varchar(100),
      minDiscount int,
      maxDiscount int,
      KEYMETERPRICE int
    );
  `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
    DROP TABLE ServiceCategories;
  `)
};
