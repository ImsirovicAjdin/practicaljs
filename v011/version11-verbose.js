////////////////////////////////////////////////////////////////////
// Version 11 - Destroy all for loops
////////////////////////////////////////////////////////////////////

// Requirements
- todoList.toggleAll should use forEach
- view.displayTodos should use forEach

// todoList.toggleAll should use forEach
there are 3 for loops here, the first one:
//      for (var i=0; i<totaltodos; i++){
//        if (this.todos[i].completed === true) {
//          completedTodos++;
//        }
//      }
In the above for loop we're trying to iterate over this.todos. Let's convert it to a forEach. this.todos is an array, that's why it has a forEach method:
this.todos.forEach()

forEach takes a callback function. 
this.todos.forEach(function() {});

forEach will calls this functions for us, each time it runs the function it's gonna pass in each item in the array. So if you have 3 todos in your todos array, the first time it's gonna call the first todo object, second time the second todo object, etc. So I'm gonna call this parameter 'todo' because that's what's gonna be passed in into our callback function:
this.todos.forEach(function(todo) {});

The rest is more or less similar to what we had:
this.todos.forEach(function(todo) {
  if (todo.completed === true) {
    completedTodos++;
  }
});

SECOND for loop:
if (completedTodos === totalTodos) {
  //  for (var i = 0; i < totalTodos; i++) {
  //    this.todos[i].completed = false;
  //  }
  
this.todos.forEach(function(todo) {
  todo.completed = false;
});

THIRD for loop:
} else {
  // for (var i = 0; i < totalTodos; i++) {
  //   this.todos[i].completed = true;
  // }
  this.todos.forEach(function(todo) {
    todo.completed = true;
  });

NOW, I'm going to collapse these two forEach statements into one. How?
// Case 1: If everything's true, make evertyhing false.
// if (completedTodos === totaltodos) {
//  this.todos.forEach(function(todo) {
//    todo.completed = false;
//  });
// Case 2: Otherwise, make everything true.
// } else {
//  this.todos.forEach(function(todo) {
//    todo.completed = true;
//  });
// }
this.todos.foreach(function(todo) {
  // Case 1: If everything's true, make everything false.
  if (completedTodos === totalTodos) {
    todo.completed = false;
  // Case 2: otherwise, make everything true.
  } else {
    todo.completed = true;
  }
});
// Above, we've re-written the code that we've had before and it has one for loop instead of two of them.

-----
// view.displayTodos should use forEach


// Review


////////////////////////////////////////////////////////////////////
// Interlude - Understanding "this"
////////////////////////////////////////////////////////////////////

// The cheatsheet
// Case 1: In a regular function
// Case 2: When a function is called as a method
// Case 3: When a function is called as a constructor\
// Case 4: When you explicitly set the value of 'this' with bind, apply, or call
// Case 5: When you're in a callback function

// Congrats
