////////////////////////////////////////////////////////////////////
// Interlude - Data types and comparisons
////////////////////////////////////////////////////////////////////

// Data types overview
Objects (can be as complex as you want): {} // todoList, arrays, functions
Primitives (building blocks) // "IF IT'S NOT A PRIMITIVE, IT'S AN OBJECT"
String
Number
Null
Undefined
Boolean
Symbol
// Comparisons with primitives
'gordon' === 'gordon'; // true
true===true; true

// Comparisons with objects
{} === {} // false
[1,2,3] === [1,2,3] // false

// Identical Street:
 /\
[  ]  // 1001 Identical St.

 /\
[  ]  // 1002 Identical St.

 /\
[  ]  // 1003 Identical St.

// Is the house 1001 Identical St. the same as the house at 1002 Identical St.? Well, if you look at the way that primitives compare, then yes. The houses are exactly the same (roof is red, windows are blue, etc). But when you're comparing objects in JS, if JS were comparing House1 versus House2, or vs H3, it's actually comparing addresses, so it says, 'Oh this house is 1001 Ident St, and this one is 1002 Ident St, so it's not the same house'. The fact that house looks the same is irrelevant. The JS is looking at the addresses. The only comparison that is true is if you're comparing the same house.

{}  // Memory address 1
{}  // Memory address 2
{}  // Memory address 3

JS saves objects at unique locations in memory.
The only way when this comparison is true:

var houseA = {};
houseA === houseA;
< true

// Comparisons review
Primitives (values) VS Objects (references)
[2]       // {} memory address 1
[2]       // {} memory address 2
[2]       // {} memory address 3
// How are primitives and objects stored inside of variables?
// Code example 1
var myPrimitive = 10;
var myObject = {name: 'gordon'};
----------------------------------
myPrimitive[___________10_________]
myObject[____Memory address 1_____]--->[__{name: 'gordon'}___]
// Code example 2
var myHouse = {color: 'blue'};
myHouse.color = 'red';
------------------------------
myHouse[_____Memory address 1_________-]---->[___{color: 'blue'}
myHouse[_____Memory address 1_________-]---->[___{color: 'red'}
// Code example 3
var myHouse = {color: 'blue'};
var color = myHouse.color;
color = 'red';
----------------
> myHouse.color // ?
// var myHouse >>> myHouse[____________________]
// = {color: 'blue'} >>> myHouse[___Memory address 1____-]---> {color: 'blue'}
... and then on the right hand side we're gonna create an object, and once an object's created we're gonna get a memory address and JavaScript is gonna store that memory address inside the myHouse variable
// var color >>> color[___________]
// = myHouse.color >>> color[__'blue'__]
// color = 'red'
>>> color[___'red'___]

The reason why most students get this wrong is because they have not been trained on how to think like a computer:
var myHouse = {color: 'blue'};
var color = myHouse.color;
color = 'red';
// Code example 4
var myHouse1 = {color: 'blue'};
var myHouse2 = myHouse1;
myHouse2.color = 'red';
// myHouse1.color // ?
// myHouse2.color // ?
-----
// var myHouse1 >>> myHouse[_______] // we get that labelled box
// = {color: 'blue'} >>> myHouse[___memory address 1___-]--->{color: 'blue'} // we gonna get that memory address and save the memory address in the labelled box
// var myHouse2 >>> myHouse2[__________]
// = myHouse1 >>> myHouse[___memory address 1___]
// var myHouse2.color = 'red' >>> myHouse2[___memory address 1___-]--->{color: 'red'}
Answer: both myHouse1.color and myHouse2.color are RED

myHouse1 [__memory address 1__-]-> {color: 'blue'}
myHouse2 [__memory address 2__-]/

// Code example 5
var myHouse1 = {color: 'blue'};
var myHouse2 = {color: 'blue'};
myHouse2.color = 'red';
-----------
// myHouse1.color ?
// myHouse2.color ?

// var myHouse1 >>> myHouse1[_________] // a labelled box is created
// = {color:'blue'} >>> myHouse1[__memory address 1___-]---> {color: 'blue'} // and give a memory address
// var myHouse 2 >>> myHouse2[_______] // another labelled box is created
// = {color: 'blue'} >>> muHouse2[__memory address 2___-]--> {color: 'blue'} // and given another memory address
// myHouse2.color = 'red' >>> myHouse2[___memory address 2__-]--> {color: 'red'} // 

// myHouse1.color is blue
// myHouse2.color is red

////////////////////////////////////////////////////////////////////
// 7 HTML and the DOM
////////////////////////////////////////////////////////////////////

// Requirements
- There should be a "Display todos" button and a "Toggle all" button in the app.
- Clicking "Display todos" should run todoList.displayTodos
- Clicking "Toggle all" should run todoList.toggleAll

// HTML essentials
// What's the DOM

// There should be a "Display todos"buton and a "Toggle all" button in the app
<body>
  <h1>Todo List</h1>
  <button id="displayTodosButton">Display Todos</button>
  <button id="toggleAllButton">Toggle All</button>
</body>
// Clicking "Display todos" should run todoList.displayTodos
> document // document represents the DOM
// 1. We want to get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton); // won't work if our script tag is in the HEAD!
// 2. We want to run displayTodos method, when someone clicks the display todos button
  // we'll do it by employing an event listener, i.e. addEventListener();
  displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
  });
  // test: (1) click the Display Todos button: < Your todolist is empty!
  // (2) > todoList.addTodo('First item'); then click Display Todos button: < My Todos: ( ) First item
  
  
  
// Clicking "Toggle all"should run todoList.toggleAll
  // We want to get the reference to the Toggle All button:
  var toggleAllButton = document.getElementById('toggleAllButton');
  // Now that we have a reference to this button, we can add an event listener to listen for changes on it (only click events!):
  toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
  });
  // test: (1) Click Toggle All: < Your todo list is empty
  // (2) add a couple todo list items: todoList.addTodo('1st'); todoList.addTodo('2nd');
  // (3) click Toggle All, lists todos as checked
  // (4) click Toggle All again, lists all todos as unchecked



// Review
