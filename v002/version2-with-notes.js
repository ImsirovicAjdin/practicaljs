// VERSION 2: FUNCTIONS
// #####################################################################################################
// Functions are just recipes:
makeTurkeySandwich
  Get one slice of bread.
  Add turkey.
  Put a slice of bread on top.

function makeTurkeySandwich() {
  Get one slice of bread.
  Add turkey.
  Put a slice of bread on top.
}

function makeTurkeySandwich() {
  Get one slice of bread;
  Add turkey;
  Put a slice of bread on top;
}
makeTurkeySandwich();

// Customizing Functions
// ///////////////////////////////

makeSandwichWith _____________
  Get one slice of bread.
  Add __________.
  Put a slice of bread on top.

function makeSandwichWith(filling) {
  Get one slice of bread;
  Add ______________;
  Put a slice of bread on top;
}
makeSandwichWith ____ham_____
makeSandwichWith(ham);

// More on customizing functions
function sayHiTo(person) {
  console.log('hi', person);
}
sayHiTo('gordon') // person = 'gordon'

// V2 Requirements
// It shoud have a function to CREATE todos // addTodo() {}
// It should have a function to READ todos // displayTodos() {}
// It should have a functino to UPDATE todos // changeTodo() {}
// It should have a function to DELETE todos // deleteTodo() {}

// CREATE
// ////////////////////////////////////////////////////
function addTodo() {
  todos.push('new todo');
  displayTodos();
}
addTodo() // ..., 'new todo']
improvement:
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
addTodo('some stuff');
// READ
// ////////////////////////////////////////////////////
function displayTodos() {
  console.log('My todos:', todos);
}

// UPDATE 
// ////////////////////////////////////////////////////
// can't do it this way:
function changeTodo() {
  todos[0] = 'some new value';
}
// instead, do it like this:
function changeTodo(position, newValue) {
  todos[position] = new value;
}
// DELETE
// ////////////////////////////////////////////////////
// can't do it this way:
function deleteTodo() {
  todos.splice(0,1);
}
// instead, do it like this:
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
deleteTodo(0);
deleteTodo(1); // etc
https://app.pluralsight.com/library/courses/learning-programming-abstractions-python/table-of-contents

