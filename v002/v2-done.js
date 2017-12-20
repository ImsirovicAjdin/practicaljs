var todos = ['item 1', 'item 2', 'item 3'];

// display function
function displayTodos() {
	console.log('My Todos:', todos);
}
// test:
// displayTodos();


// function for adding a todo
function addTodo() {
	todos.push('new todo');
}
// test:
// addTodo();
// addTodo();
// displayTodos();


// function for adding a todo with an argument
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}
// test:
// addTodo('hello there');


// function to change a todo given position
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}
// test:
// addTodo('hello there');
// changeTodo(0, 'changed');


// function to delete a todo
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
// test:
// addTodo('hello there');
// changeTodo(0, 'changed');
// deleteTodo(1);