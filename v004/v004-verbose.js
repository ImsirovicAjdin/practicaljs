// VERSION 4 - BOOLEANS
// ##################################################
Requirements
// todoList.addTodo should add objects // (1)
// todoList.changeTodo should change the todoText property // (2)
// todoList.toggleCompleted should change the completed property // (3)

// (1.1)
// moving from things like 'item1' to an object because an object can represent more data, and it's a perfect way to represent
// more complicated data with different properties on it:
{
  todoText: 'item1',
  completed: false // Boolean true or false
}
// (1.2) implemented in todoList.addTodo:
...,
addTodo: function(todoText) {
  this.todos.push({
    // we're gonna add 2 properties:
    // 1. todoText (equal to todoText parameter passed on anon function)
          // todoText: todoText (the first is the name of the property, the second is the value - which will vary based 
          // on what you pass in as parameter)
    // 2. completed property (boolean true and false, by default it'll be false)
    todoText: todoText,
    completed: false
  });
  this.displaytodos();
}
// (1.2) test:
> todoList.addTodo('this is an object!');

// (2.1) todoList.changeTodo should change the todoText property on each todo object
I'm gonna change the parameter name, newValue is not good enough, it can be more descriptive, explicit:
...,
changeTodo: function(position, todoText) {
  // this.todos[position] = newValue;
  this.todos[position].todoText = todoText;
  this.displayTodos();
}
// (2.2) test:
todoList.addTodo('first try'); // so we have sth we can modify
todoList.changeTodo(0, 'second try');

// (3.1) todoList.toggleCompleted should change the completed property
// toggle a boolean:
// gordonBoolean = !gordonBoolean;
...,
toggleCompleted: function(position) {
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
}
// (3.2) test
todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
