// Functions
// You have seen quite a lot of JavaScript already, and now you are ready for
// functions. Soon you will see that you have been using functions already, but
// now it is time to learn how to start writing your own. Functions are a great
// building block that will reduce the amount of code you will need in your
// app. You can call a function whenever you need it, and you can write it as a
// kind of template with variables. So, depending on how you've written it,
// you can reuse it in many situations.
// They do require you to think differently about the structure of your code
// and this can be hard, especially in the beginning. Once you have got the
// hang of this way of thinking, functions will really help you to write nicely
// structured, reusable, and low-maintenance code. Let's dive into this new
// abstraction layer!

// Basic functions
// We have been calling functions for a while already. Remember prompt() ,
// console.log() , push() , and sort() for arrays? These are all functions.
// Functions are a group of statements, variable declarations, loops, and so on
// that are bundled together. Calling a function means an entire group of
// statements will get executed.
// First, we are going to have a look at how we can invoke functions, and then
// we will see how to write functions of our own.

// Invoking functions
// We can recognize functions by the parentheses at the end. We can invoke
// functions like this:

// nameOfTheFunction();
// functionThatTakesInput("the input", 5, true);
// This is invoking a function called nameOfTheFunction with no arguments,
// and a function called functionThatTakesInput with three required
// arguments.

// Writing functions
// Writing a function can be done using the function keyword. Here is the
// template syntax to do so:

function hiThere() {
  let you = prompt("What's your name? ");
  console.log("Hello", you, "!");
}
// The above function can be called like this:
hiThere();

// Parameters and arguments
// You may have noticed that we are talking about parameters and arguments.
// Both terms are commonly used to mean the information that is passed into a
// function:

// A parameter is defined as the variable listed inside the parentheses of the
// function definition, which defines the scope of the function. They are
// declared like so:
function myFunc(param1, param2) {
  // code of the function;
}
// When called, this function will simply add the parameters and log the
// result. However, to do this, we can call the function with arguments:

myFunc("arg1", "arg2");

function addTwoNumbers(x, y) {
  console.log(x + y);
}
// We have seen various examples of arguments; for example:

console.log("this is an argument");
prompt("argument here too");

let arr = [];
arr.push("argument");

// Depending on the arguments you are calling with the function, the outcome
// of the function can change, which makes the function a very powerful and
// flexible building block. A practical example using our addTwoNumbers()
// function looks like this

addTwoNumbers(3, 4);
addTwoNumbers(12, -90);

// As you can see, the function has a different outcome for both calls. This is
// because we call it with different arguments, which take the place of x and
// y , that are sent to the function to be used within the function scope.

// Default or unsuitable parameters
// Some languages might crash and cry, but not JavaScript. JavaScript just
// gives the variables a default type, which is undefined. And undefined +
// undefined equals:
// NaN
// Instead, we could tell JavaScript to take different default parameters. And
// that can be done like this:

function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
}
// If you call the function with no arguments now, it will automatically assign
// 2 to x and 3 to y , unless you override them by calling the function with
// arguments. The values that are used for invoking are prioritized over
// hardcoded arguments. So, given the above function, what will the output of
// these function calls be?

addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);

let favoriteSubject = prompt("What is your favorite subject?");

let result = addTwoNumbers(4, 5);
console.log(result);

function addTwoNumbers(x, y) {
  return x + y;
}

let results = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  results.push(result);
}

console.log(results);

// Special functions and operators
// There are a few special ways of writing functions, as well as some special
// operators that will come in handy. We are talking about arrow functions and
// the spread and rest operators here. Arrow functions are great for sending
// functions around as parameters and using shorter notations. The spread and
// rest operators make our lives easier and are more flexible when sending
// arguments and working with arrays.
// Arrow functions
// Arrow functions are a special way of writing functions that can be
// confusing at first. Their use looks like this:
// (param1, param2) => body of the function;
// Or for no parameters:
// () => body of the function;
// Or for one parameter (no parentheses are needed here):
// param => body of the function;
// Or for a multiline function with two parameters:
// (param1, param2) => {
//  // line 1;
//  // any number of lines;
// };
// We can write it
// like this:
// let doingArrowStuff = (x) => console.log(x);

// And invoke it like this:
// doingArrowStuff("Great!");

// This will log Great! to the console. If there is more than one argument, we
// will have to use parentheses, like this:
// let addTwoNumbers = (x, y) => console.log(x + y);

// If there are no arguments, you must
// use the parentheses, like this:
// let sayHi = () => console.log("hi");

// As a final example, we can combine the arrow function with certain built-in
// methods. For example, we can use the foreach() method on an array. This
// method executes a certain function for every element in the array. Have a
// look at this example:
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// Spread operator
// The spread operator is a special operator. It consists of three dots used
// before a referenced expression or string, and it spreads out the arguments or
// elements of an array.
// This might sound very complicated, so let's look at a simple example:
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very"];
console.log(message);

// elements in the new array. It can also be used to send multiple arguments to
// a function, like this:
// function addTwoNumbers(x, y) {
//  console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// Rest parameter
// Similar to the spread operator, we have the rest parameter. It has the same
// symbol as the spread operator, but it is used inside the function parameter
// list. Remember what would happen if we were to send an argument too
// many times, as here:

function someFunction(param1, param2) {
  console.log(param1, param2);
}
// someFunction("hi", "there!", "How are you?");

// That's right. Nothing really: it would just pretend we only sent in two
// arguments and log hi there! . If we use the rest parameter, it allows us to
// send in any number of arguments and translate them into a parameter array.
// Here is an example:
// function someFunction(param1, ...param2) {
//  console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

// Returning with arrow functions
// If we have a one-line arrow function, we can return without using the
// keyword return . So if we want to rewrite the function, we can write it like
// this to make an arrow function out of it:
// let addTwoNumbers = (x, y) => x + y;
// And we can call it and store the result like this:
// let result = addTwoNumbers(12, 15);
// console.log(result);
