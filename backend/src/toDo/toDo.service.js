const knex = require("../db/connection")

async function read(id) {
    return await knex("todo").where({ toDo_id: id }).first()
}

async function list() {
    return await knex("todo").select("*")
}

async function listByDate(date) {
    return await knex("todo")
        .select("*")
        .where({ toDo_date: date })
}

async function update(todo) {
    return await knex("todo")
    .where({ toDo_id: todo.toDo_id })
    .update(todo, "*")
    .then((updated) => updated[0])
}

async function create(newTodo) {
    return await knex("todo")
    .insert(newTodo)
    .returning("*")
    .then(rows => rows[0])
}

async function destroy(id) {
    return await knex("todo")
    .where({ toDo_id: id })
    .delete()
}


module.exports = {
    read,
    list,
    listByDate,
    update,
    create,
    destroy
}