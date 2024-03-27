/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex("todo").insert([
    {
      "toDo_name": "clean room",
      "toDo_description": "I need to clean my room before guests come over.",
      "toDo_date": "2024-3-5",
      "toDo_endDate": "2024-3-5",
      "toDo_time": "15:00:00",
      "toDo_endTime": "16:00:00",
      "created_at": "2024-03-05 15:00:00+00",
      "updated_at": "2024-03-05 15:00:00+00"
    },
    {
      "toDo_name": "clean car",
      "toDo_description": "I need to clean my car before i go to work.",
      "toDo_date": "2024-3-6",
      "toDo_endDate": "2024-3-6",
      "toDo_time": "11:00:00",
      "toDo_endTime": "12:00:00",
      "created_at": "2024-03-06 11:00:00+00",
      "updated_at": "2024-03-06 11:00:00+00"
    },
    {
      "toDo_name": "make dinner",
      "toDo_description": "I need to make dinner for my family.",
      "toDo_date": "2024-3-6",
      "toDo_endDate": "2024-3-6",
      "toDo_time": "18:00:00",
      "toDo_endTime": "20:00:00",
      "created_at": "2024-03-06 11:00:00+00",
      "updated_at": "2024-03-06 11:00:00+00"
    }
  ])
};
