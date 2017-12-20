// STORE
// step2
var todos = ['item1', 'item2', 'item3'];
var todoList = {
  todos: ['item1','item2','item3'];
}

// READ
// step1 reminder
function displayTodos() {
  console.log('My Todos:', todos);
}
// step 2
var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  }
};

// CREATE
// step1
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
// step2
var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};
// step3, test:
> todoList.addTodo('plunker');


// UPDATE
// step1
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
// step2
var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};
// step3, test:
> todoList.changeTodo(0, 'first');
< My Todos ["first", "item2", "item3"];


// DELETE
// step 1
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
// step2
var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
// step3, test:
> todoList.displayTodos(); // My Todos ["it1", "i2", "i3"]
> todoList.deleteTodo(1);
< My Todos ["item1", "item3"]

// Success is the proces
// Ability = Process * Time
// The most important part of your process

