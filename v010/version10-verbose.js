////////////////////////////////////////////////////////////////////
// Interlude - Functions inside of functions
////////////////////////////////////////////////////////////////////

// runWithDebugger
  function logTenNumbers() {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
  }

  function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
  }

  runWithDebugger(

    // passing the function as parameter of the runWithDebugger function
    function logTenNumbers() {
      for (var i = 0; i < 10; i++) {
        console.log(i);
      }
    }

  );
  // remember, ourFunction got set to logTenNumbers
  // if I step over, and then I step into ourFunction we're actually gonna step into the logTenNumbers
  // effectively, we've made a function that enhances another function, so we can think of runWithDebugger() as a function that enhances logTenNumbers()

// setTimeout
  // we'll create a simple text based alarm clock
  // setTimeout() will enhance any function you pass it, by turning it into a simple alarm clock, you can think of it that way
  // setTimeout(function() {}, 5000);  // wait 5 seconds, then run the function passed in as the first parameter:
  setTimeout(function() {
    console.log('Wake up Gordon!');
  }, 5000);
  
// forEach
  // (1) - running it manually
  // (2) - improvement with for loop
  // (3) - using forEach
  // (4) - let's create our own forEach
  
  // very often you wanna run a function on every item in the array
  var students = ['jonathan', 'jenny', 'elliot'];
  function logName(name) {
    console.log(name);
  } // (1) 
  
  for (var i = 0; i < students.length; i++) {
    logName(students[i]);
  }
   // (2)
   
   students.forEach(logName); // (3a)
   students.forEach(function logName(name) { // (3b)
     console.log(name);
   });
   students.forEach(function(name) { // (3c)
     console.log(name);
   });
   
   // ---- (4def)
   function forEach(myArray, myFunction) { 
     for (var i = 0; i < myArray.length; i++) {
       myFunction(myArray[i]);
     }
   }
   
   (4call)
   forEach(students, function(student) {
     console.log(student);
   });
   forEach(students, logName);
   
// addEventListener
  var tutorialsElement = $0;
  tutorialsElement.addEventListener('click', function() {
    console.log('The tutorials element was clicked!');
  });
  //VS
  tutorialsElement.addEventListener('click', function(event) {
    console.log(event);
    console.log('The tutorials element was clicked!');
  });

// Buzzwords: Higher order functions and callback functions
  // Higher order functions:
     - Functions that accept other functions
     - Enhance the behavior of other functions
  // Callback functions:
     - The functions that are passed into higher order functions

////////////////////////////////////////////////////////////////////
// Version 10 - Click to delete
////////////////////////////////////////////////////////////////////

// Introducing Glitch
// The 'return' statement
function multiplyTwoNumbers(a,b) {
  var result = a * b;
}
var theProductOf2And10 = multiplyTwoNumbers(2,10);
> theProductof2And10
< undefined
we need to return result!
So:
function multiplyTwoNumbers(a, b) {
  var result = a * b;
  return result;
 }
 var theProductOf2And10 = multiplyTwoNumbers(2,10);
 > theProductOf2And10
 < 20
If you want to get the value that your function has computed, you use the "return result" go tell it to give you back that value.

// Requirements
- There should be a way to create delete buttons
- There should be a delete button for each todo
- Each li should have an id that has the todo position
- Delete buttons should have access to the todo id
- Clicking delete should update todoList.todos and the DOM

// There should be a way to create delete buttons
step1
...
  },
  createDeleteButton: function() {
    var deleteButton;
    return deleteButton;
  }
step2
...
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    return deleteButton;
  }
step3
...
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
step4, test:
> view.crateDeleteButton()
< <button class="deleteButton">Delete</button>
> var gordonElement = vire.createDeleteButton();
> gordonElement
< <button class="deleteButton">Delete</button>

// There should be a delete button for each todo
We need to append the delete button to our li:
...
todoLi.textContent = todotextWithCompeltion;
(!)> todoLi.appendChild(this.createDeletebutton());
todosUl.appendChild(todoLi);
// (!)> "I just added this line"


// Each li should have an id that has the todo position
todoLi.id = i;

// Delete buttons should have access to the todo id
var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(event) {
  console.log(event);
});
test it by adding an item, look at the target member, look at the parentNode 
improvements:
todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id);
});

// Clicking delete should update todoList.todos and the DOM
todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id);
  // Get the element that was clicked on.
  var elementClicked - event.target;
  
  // Check if elementClicked is a delete button.
  if (elementClicked.className === 'deleteButton') {
    // run handlers.deleteTodo
                            // first must update deleteTodo to look like this:
                            deleteTodo: function(position) {\
                              todoList.deleteTodo(position);
                              view.displayTodos();
                            },
   // The position is the id of the li element, so:
   parseInt(elementClicked.parentNode.id);
   // Now that we have the above, we can paste that whole thing into the if statement, so it looks like:
   // Check if elementClicked is a delete button.
   if (elementClicked.classname === 'deleteButton') {
     handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
   }
                            
  }
});
> test, by adding todos, works
> now, improvements:
setUpEventListeners: function() {
   var todosUl = document.querySelector('ul');
   
   todosUl.addEventListener('click', function(event) {
     // Get the element that was clicked on.
     var elementClicked = event.target;
     
     // Check if elementClicked is a delete button.
     if (elementClicked.className === 'deleteButton') {
       handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
     }
   });
 }
};
view.setUpEventListeners();

// Cleanup and Review
