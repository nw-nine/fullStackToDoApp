/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("toDo_id").primary()
    table.string("toDo_name").notNullable()
    table.text("toDo_description")
    table.date("toDo_date").notNullable()
    table.date("toDo_endDate")
    table.time("toDo_time").notNullable()
    table.time("toDo_endTime")
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("todo")
};
