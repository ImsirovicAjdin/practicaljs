var todoList = {
  todos: ['item1', 'item2', 'item3'],		  // STORE
  displayTodos: function() {				  // READ
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {					  // CREATE
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {  // UPDATE
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {			  // DELETE
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
// TEST METHODS
// > todoList.displayTodos(); 
// My Todos ["it1", "i2", "i3"]
// > todoList.deleteTodo(1);
// < My Todos ["item1", "item3"]

// Success is the proces
// Ability = Process * Time
// The most important part of your process

