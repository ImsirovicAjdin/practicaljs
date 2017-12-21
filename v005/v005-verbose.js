// VERSION 5 - LOOPS OF LOGIC
// #####################################################
// for loop in English:
i = 0 // Initialization
Say "hey" if i < 3 // Condition
Increase i by 1 // final-expression
0 "hey"
1 "hey"
2 "hey"
// for loop in JS:
for (initialization, condition, final-expression) {
  console.log("hey");
}
for(i=0; i < 3; i++) { // i = i + 1
  console.log("hey");
}

// LOOPING OVER ARRAYS
var testArray = ['item1', 'item2', 'item3'];
for (var i = 0; i < 3; i++) {
  console.log(testArray[i]);
}
// making the condition dynamic:
for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}

// V5 requirements
// .displayTodos should show .todoText // (5a)
// .displayTodos should tell you if .todos is empty // (5b)
// .displayTodos should show .completed // (5c)

// .displayTodos should show .todoText // (5a)
,
displayTodos: function(){
  console.log('My Todos:');
  for (var i = 0; i < this.todos.length; i++) {
    console.log(this.todos[i].todoText);
  }

// .displayTodos should tell you if .todos is empty // (5b.1)
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
    }
    // if this.todos.length is equal to 0 (i.e. if this.todos.length === 0)
        // console.log('Your todo list is empty!');
    // else
        // print todos as normal
  },
  addTodo...
// .displayTodos should tell you if .todos is empty // (5b.2)  // 1st, we'll list out what needs to be done in comments (1), nxt (2) we'll translate it to code, (3), test it out
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.lenght; i++) {
      console.log(this.todos[i].todoText);
    }
    // if there are no todos (11)
    // (i.e. if this.todos.lenght is equal to 0) (12)
    // (i.e. if this.todos.lenght === 0) (13)
      // console.log('Your todo list is empty!'); (14)
    // else (15)
      // print todos as normal (16)
 
    // (21)
    if(this.todos.length === 0) { // (23)
      console.log('Your todo list is empty!'); // (24)
    } else { // (25)
      console.log('My Todos:'); // (26)
      for(var i = 0; i <this.todos.length; i++) {
        console.log(this.todos[i].todoText);
      }
    }
    // (30) test it out:
    > todoList.displayTodos();
    < Your todo list is empty!
    > todoList.addTodo('an item');
    < My Todos:
    < an item
    > todoList.deleteTodo(0);
    < Your todo list is empty!
    
// .displayTodos should show completed // (5b.3)
// expand displayTodos (description at end):
displayTodos: function() {
  if (this.todos.lenght === 0) {
    console.log('Your todo list is empty!');
  } else {
    console.log('My todos:');
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
      
      // check if .completed is true
          // print with (x)
      // else
          // print with ( )        
     }
   }
 }
// now let's update according to specs we made:
displayTodos: function() {
  if (this.todos.length === 0) {
    console.log('Your todo list is empty!');
  } else {
    console.log('My todos:');
    for (var i = 0; i < this.todos.length; i++) {
//      console.log(this.todos[i].todoText); // (abc)

      // check if .completed is true
      if (this.todos[i].complete === true) {
          // print with (x)
          console.log('(x)', this.todos[i].todoText);
      } else {
          // print with ( )  
          console.log('( )', this.todos[i].todoText));
     }
   }
 }
// (abc) we've deleted this line as we've split it in if-else below to cater for 2 different scenarios!
// save and test it:
> todoList.addTodo('first');
< ...
> todoList.addTodo('first');
< ...
// now let's toggle completed:
> todoList.toggleCompleted(1);
<<<:
My Todos:
( ) first
(x) second
