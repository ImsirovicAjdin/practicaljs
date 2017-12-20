var todos = [];

// READ
function displayTodos() {
  console.log('My Todos: ', todos);
}

// CREATE
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// UPDATE
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// DELETE
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}