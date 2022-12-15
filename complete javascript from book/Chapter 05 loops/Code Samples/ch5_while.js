// Loops
// We are starting to get a good basic grasp of JavaScript. This chapter will
// focus on a very important control flow concept: loops. Loops execute a
// code block a certain number of times. We can use loops to do many things,
// such as repeating operations a number of times and iterating over data sets,
// arrays, and objects.

// // while loops
// The first loop we will discuss is the while loop. A while loop executes a
// certain block of code as long as an expression evaluates to true . The
// snippet below demonstrates the syntax of the while loop:

// The while loop will only be executed as long as the condition is true , so
// if the condition is false to begin with, the code inside will be skipped.

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
    console.log("false");
  } else {
    someArray.shift();
  }
}

console.log(someArray);

// we can also do more sophisticated things very easily with loops. Let's
// see how easy it is to fill an array with the Fibonacci sequence using a loop:
// In the Fibonacci sequence, each value is the sum of the two previous values,
// starting with the values 0 and 1.

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibonacciArray);
