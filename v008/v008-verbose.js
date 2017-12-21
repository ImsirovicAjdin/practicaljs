////////////////////////////////////////////////////////////////////
// Interlude - Don't wonder about things the debugger can tell you
////////////////////////////////////////////////////////////////////

// todoList.displayTodos
  // I wanna pause the program as it's running (type 'debugger;' as the first thing inside the function you want to inspect)
// todoList.addTodo
// todoList.changeTodo
// todoList.deleteTodo
// todoList.toggleCompleted
// todoList.toggleAll
// Use the debugger all the time
So the reason that I spent so much time in the debugger is that it's probably the most important tool in your arsenal. With the dubugger you have the full visibility of what your program is doing and you have a deeper understanding of what is happening. Earlier you needed just to trust me but using the debugger gives you a proof of what is going on. Don't ask questions that the debugger can tell you!
// Focus on understanding, not building from scratch
Forget about building from scratch. Trying to remember everything is a losing battle. I instead focus on understanding things deeply the first time I learn them, and then I forget about it. Cuz I learned it well the first time, when I look at it again I can just refresh my memory.

////////////////////////////////////////////////////////////////////
// Version 8 - Getting data from inputs
////////////////////////////////////////////////////////////////////

// Our first refactoring
<button onclick="handlers.displayTodos()">Display Todos</button>
<button onclick="handlers.toggleAll()">Toggle All</button>

---
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();    
};

// More on refactoring
// Requirements
  V8 Requirements
  It should have working controls for:
  .addTodo
  .changeTodo
  .deleteTodo
  .toggleCompleted
  You're gonna need to allow someone to type into a box AND buttons
  
// There should be a button for adding todos
  We need a button, and we need a way to get the user's input:

  <div>
    <button onclick="handlers.addToDo()">Add</button>
    <input type="text" id="addTodoTextInput">
  </div>
  --
  var handlers = {
   ...
   ,
   addTodo: function() {
     var addTodoTextInput = document.getElementById('addTodoTextInput");
     todoList.addTodo(addTodoTextInput.value);
     addTodoTextInput.value = '';
  }

// There should be a button for changing todos
  <div>
    <button onclick="handlers.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type="number">
    <input id="changeTodoTextInput" type="text">
  </div>
  --
  var handlers = {
    ...,
    changeTodo: function() {
      var cahangeTodoPositionInput = document.getElementById('changeTodoPostiionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
    }
  }

// There should be a button for deleting todos
  <div>
    <button onclick="handlers.deleteTodo()">Delete</button>
    <input id="deleteToDoPosition" type="number">
  </div>
  --
  ...,
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deletetodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = ''; // clear the input once we're done
  }

// There should be a button for toggling a todo
  <div>
    <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
    <input id="toggleCompletedPositionInput" type="number">
  </div>
  --
  ...,
  toggleCompleted: function() {
    var toggelCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
// Review
We saw how to effectively get inputs from users and how to operate on them
