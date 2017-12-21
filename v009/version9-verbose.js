////////////////////////////////////////////////////////////////////
// Version 9 - Escape from the console
////////////////////////////////////////////////////////////////////

// Requirements
There should be an li element for every todo
Each li element should contain .todoText
Each li element should show .completed

// Inserting li elements into the DOM
  <ul>
  </ul>
  --
  > var todoLi = document.createElement('li');
  > todoLi
  < <li></li>
  > var todosUl = document.querySelector('ul');
  > todosUl
  < <ul></ul>
  > todosUl.appendChild(todoLi);

// There should be an li element for every todo
  var view = { // all it does is it takes the todos array and displays it to the screen
    displayTodos: function() {
      var todosUl = document.querySelector('ul');
      var todoLi = document.createElement('li');
      todosUl.appendCild(todoLi);
  };
  > view.displayTodos()
  // v2
  var view = { // all it does is it takes the todos array and displays it to the screen
    displayTodos: function() {
      for (var i = 0; i < todoList.todos.length, i++) {
          var todosUl = document.querySelector('ul');
          var todoLi = document.createElement('li');
          todosUl.appendCild(todoLi);
      } 
  };
  > view.displayTodos(); // it's just going to keep adding new elements to HTML; what we'd like to do is clear everything to 0 items so that it always displays the correct number of existing todo items when the function is called
  // v3
  var view = { // all it does is it takes the todos array and displays it to the screen
    displayTodos: function() {
      var todosUl = document.querySelector('ul'); // becasue we don't need to create it every for loop :)
      todosUl.innerHtml = ''; // clear out the ul before it starts adding the new elements
      for (var i = 0; i < todoList.todos.length, i++) {
          var todoLi = document.createElement('li');
          todosUl.appendCild(todoLi);
      }
  };
  > view.displayTodos();
  > view.displayTodos(); // now, no matter how many times I call it, it's gonna display the number of todo items there are

// Each li element should contain .todoText
  var view = { // all it does is it takes the todos array and displays it to the screen
    displayTodos: function() {
      var todosUl = document.querySelector('ul'); // becasue we don't need to create it every for loop :)
      todosUl.innerHtml = ''; // clear out the ul before it starts adding the new elements
      for (var i = 0; i < todoList.todos.length, i++) {
          var todoLi = document.createElement('li');
          todoLi.textContent = todoList.todos[i[.todoText; // it's taking the todo li element, accessing it's text property, and setting it to the todo text property of each of our todo objects
          todosUl.appendCild(todoLi);
      }
  };
> view.displayTodos(); // should now show the full input we gave in our GUI

// Each li element should show .completed
  var view = { // all it does is it takes the todos array and displays it to the screen
    displayTodos: function() {
      var todosUl = document.querySelector('ul'); // becasue we don't need to create it every for loop :)
      todosUl.innerHtml = ''; // clear out the ul before it starts adding the new elements
      for (var i = 0; i < todoList.todos.length, i++) {
          var todoLi = document.createElement('li');
          
          // '(x) todoText'
          // var todoTextWithCompletion = '';
          // if(todo.completed === true)
            // (x) todoText
          // else 
            // ( ) todoText
          // todoLi.textContent = todoTextWithCompletion;
          
          var todoTextWithCompletion = '';
          var todo = todoList.todos[i];
          if(todo.completed === true) {
            todoTextWithCompletion = '(x)' + todo.todoText;
          } else {
            todoTextWithCompletion = '( )' + todo.todoText;
          }
          
          todoLi.textContent = todoTextWithCompletion; // (1)
          
          // todoLi.textContent = todoList.todos[i[.todoText; // (2) ; the line (1) is now replacing the line (2)
          todosUl.appendCild(todoLi);
      }
  };

// Escaping the console
  // the right place to display our todos would be at the end of our handlers, so add view.displayTodos(); at the end of each handler in var handlers
  // now we can delete the display todos button and we can delete the displayTodos handler
  // we can also get rid of this.displayTodos, and the displayTodos: function() {...} code

// Review
