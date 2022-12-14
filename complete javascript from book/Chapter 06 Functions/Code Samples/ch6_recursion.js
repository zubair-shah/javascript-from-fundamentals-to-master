// Recursive functions
// In some cases, you want to call the same function from inside the function.
// It can be a beautiful solution to rather complex problems. There are some
// things to keep in mind though. What do you think this will do?

function getRecursive(nr) {
  console.log(nr);
  getRecursive(--nr);
}

// getRecursive(3);
// It prints 3 and then counts down and never stops. Why is it not stopping?
// Well, we are not saying when it should stop. Look at our improved version:

// function logRecursive(nr) {
//   console.log("Started function:", nr);
//   if (nr > 0) {
//     logRecursive(nr - 1);
//   } else {
//     console.log("done with recursion");
//   }
//   console.log("Ended function:", nr);
// }

// logRecursive(3);

//   What happens when we call a function recursively is that it goes one
// function deeper every time. The first function call is done last. For this
// function it goes like this:
// getRecursive(3)
// getRecursive(2)
// getRecursive(1)
// getRecursive(0)
// done with getRecursive(0) execution
// done with getRecursive(1) execution
// done with getRecursive(2) execution
// done with getRecursive(3) execution
// The next recursive function will demonstrate that:

function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr);
  } else {
    console.log("done with recursion");
  }
}

getRecursive(3);

function calcFactorial(nr) {
  if (nr === 0) {
    return 1;
  } else {
    return nr * calcFactorial(--nr);
  }
}
