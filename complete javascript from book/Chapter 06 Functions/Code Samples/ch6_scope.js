// Variable scope in functions
// In this section, we will discuss a topic that is often considered challenging.
// We will talk about scope. Scope defines where you can access a certain
// variable. When a variable is in scope, you can access it. When a variable is
// out of scope, you cannot access the variable. We will discuss this for both
// local and global variables.
// Local variables in functions
// Local variables are only in scope within the function they are defined. This
// is true for let variables and var variables. There is a difference between
// them, which we will touch upon here as well. The function parameters (they
// do not use let or var ) are also local variables. This might sound very
// vague, but the next code snippet will demonstrate what this means:

function testAvailability(x) {
  console.log("Available here:", x);
}

testAvailability("Hi!");
console.log("Not available here:", x);

// They are out of scope outside the function and in scope inside the function.
// Let's have a look at a variable defined inside a function:

// Variables defined inside the function are not available outside the function
// either.
// For beginners, it can be confusing to combine local variables and return .
// Right now, we're telling you the local variables declared inside a function
// are not available outside of the function, but with return you can make
// their values available outside the function. So if you need their values
// outside a function, you can return the values. The key word here is values!
// You cannot return the variable itself. Instead, a value can be caught and
// stored in a different variable, like this:

function testAvailability() {
  let y = "Local variable!";
  console.log("Available here:", y);
}

testAvailability();
console.log("Not available here:", y);

function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);
  return y;
}

let z = testAvailability();
console.log("Outside the function:", z);
console.log("Not available here:", y);

// let versus var variables

let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);

function creatingNewScope(x) {
  console.log("Access to global variables from inside functions.", globalVar);
}

creatingNewScope("some parameter");

console.log("Still available:", globalVar);

function doingStuff() {
  if (true) {
    var x = "local";
  }
  console.log(x);
}

doingStuff();

function doingStuff() {
  if (true) {
    let x = "local";
  }
  console.log(x);
}
// Here we get the error that x is not defined . Since let is only blockscoped, x goes out of scope when the if block ends and can no longer be
// accessed after that.

doingStuff();

// let x = "global";

function doingStuff() {
  let x = "local";
  console.log(x);
}

doingStuff();

var x = "global";

function confuseReader() {
  x = "Guess my scope...";
  console.log("Inside the function:", x);
}

confuseReader();
console.log("Outside of function:", x);

// const scope
// Constants are block-scoped, just like let . This is why the scope rules here
// are similar to those for let .Here is an example:
// function doingStuff() {
//  if (true) {
//  const X = "local";
//  }
//  console.log(X);
// }
// doingStuff();

// Global variables
// As you might have guessed, global variables are variables declared outside
// a function and not in some other code block. Variables are accessible in the
// scope (either function or block) where they're defined, plus any "lower"
// scopes. So, a variable defined outside of a function is available within the
// function as well as inside any functions or other code blocks inside that
// function. A variable defined at the top level of your program is therefore
// available everywhere in your program. This concept is called a global
// variable. You can see an example here:
// This will output:
// Outside function: Accessible everywhere!
// Access to global vars inside function. Accessible everywhere!
// Still available: Accessible everywhere!
// As you can see, global variables are accessible from everywhere because
// they are not declared in a block. They are always in scope after they have
// been defined—it doesn't matter where you use them. However, you can
// hide their accessibility inside a function by specifying a new variable with
// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
//  console.log("Access to global vars inside function." , globalV
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// There is only one more very important point to be made about scopes for
// now. Let's start with an example and see if you can figure out what this
// should log:
// function confuseReader() {
//  x = "Guess my scope...";
//  console.log("Inside the function:", x);
// }
// confuseReader();
// console.log("Outside of function:", x);
// Answer ready? Here is the output:
// Inside the function: Guess my scope...
// Outside of function: Guess my scope...
// Do not close the book—we'll explain what is going on. If you look
// carefully, the x in the function gets defined without the keyword let or
// var . There is no declaration of x above the code; this is all the code of the
// program. JavaScript does not see let or var and then decides, "this must
// be a global variable." Even though it gets defined inside the function, the
// declaration of x within the function gets global scope and can still be
// accessed outside of the function.
// We really want to emphasize that this is a terrible practice. If you need a
// global variable, declare it at the top of your file.

// Immediately invoked function expression
// The immediately invoked function expression (IIFE) is a way of
// expressing a function so that it gets invoked immediately. It is anonymous,
// it doesn't have a name, and it is self-executing.
// This can be useful when you want to initialize something using this
// function. It is also used in many design patterns, for example, to create
// private and public variables and functions.
// This has to do with where functions and variables are accessible from. If
// you have an IIFE in the top-level scope, whatever is in there is not
// accessible from outside even though it is top level.
// Here is how to define it:
// (function () {
//  console.log("IIFE!");
// })();
// The function itself is surrounded by parentheses, which makes it create a
// function instance. Without these parentheses around it, it would throw an
// error because our function does not have a name (this is worked around by
// assigning the function to a variable, though, where the output can be
// returned to the variable).
// (); executes the unnamed function—this must be done immediately
// following a function declaration. If your function were to require a
// parameter, you would pass it in within these final brackets.
// You could also combine IIFE with other function patterns. For example,
// you could use an arrow function here to make the function even more
// concise:
// (()=>{
//  console.log("run right away");
// })();
// Again, we use (); to invoke the function that you created.
