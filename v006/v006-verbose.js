// VERSION 6 - THINKING IN CODE
// ################################################################################
// Adding toggle all feature
// REQUIREMENTS:
// .toggleAll: If everything's true, mk everything false;
// .toggleAll: otherwidse, mk everything true
// ...,
// (v1)
toggleAll: function() {
  // If everything's true, mk everything false;
  // how to figure that out? :
  if (completedtodos === totalTodos) {
    // Make everything false.
  }
}
// ...,
// (v2)
toggleAll: function() {
  // If everything's true, mk everything false;
  // how to figure that out? :
  var totaltodos = this.todos.length;
  var completedTodos = 0;
  
  // Get number of completed todos.
  for (var i = 0; i < totalTodos; i++) { // will check the 'completed' boolean and add it into the var completedTodos
    if (this.todos[i].completed === true) {
      completedTodos++;
    }
  }
  
  if (completedtodos === totalTodos) {
    // Make everything false.
    // we'll use for loop again:
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
  }
}
// test
// > todoList.addTodo('first');
// > todoList.addTodo('sec');
// > todoList.toggleCompleted(1);
// > todoList.toggleCompleted(2);
// now change everything to false:
todoList.toggleAll();
todoList.displayTodos();

// .toggelAll: Otherwise, make everything true (4:02)
/////////////////////////////////////////////////////////
// Whenever you say 'otherwise' it's a perfect candidate for using an else statement
toggleAll: function() {
  // If everything's true, mk everything false;
  // how to figure that out? :
  var totaltodos = this.todos.length;
  var completedTodos = 0;
  
  // Get number of completed todos.
  for (var i = 0; i < totalTodos; i++) { // will check the 'completed' boolean and add it into the var completedTodos
    if (this.todos[i].completed === true) {
      completedTodos++;
    }
  }
  // Case 1: If everything's treu, make everything false.
  if (completedtodos === totalTodos) {
    // Make everything false.
    // we'll use for loop again:
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
    }
  // Otherwise, make everything true
  } else {
    for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed === true;
    }
  }
  this.displayTodos();
 }
};
// now test it:
// > todoList.addTodo('first');
// > todoList.addTodo('second');
// > todoList.addTodo('third');
// > todoList.toggleAll();
// < My Todos:
// < (x) first
// < (x) second
// < (x) third
// > todoList.toggleAll();
// < ( ) first
// < ( ) second
// < ( ) third
// > todoList.toggleCompleted(1);
// < (x) second
// > todoList.toggleAll();
// < (x) first
// < (x) second
// < (x) third