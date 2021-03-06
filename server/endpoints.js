const { server } = require("@wildcard-api/server");
const db = require("../db");

server.getTodos = async function () {
  const todos = await db.getTodos();
  return todos;
};

server.createTodo = async function (text) {
  if (!text) {
    return;
  }
  const todo = await db.createTodo(text);
  return todo;
};
