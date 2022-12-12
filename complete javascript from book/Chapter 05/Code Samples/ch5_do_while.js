// do while loops
// In some cases, you really need the code block to be executed at least once.
// For example, if you need valid user input, you need to ask at least once. The
// same goes for trying to connect with a database or some other external
// source: you will have to do so at least once in order for it to be successful.
// And you will probably need to do so as long as you did not get the result
// you needed. In these cases, you can use a do while loop.

do {
  // code to be executed if the condition is true
} while (true);

let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));

// It asks three times, because the first two times the number was not between
// 0 and 100 and the condition in the while block was true. With 34 , the
// condition in the while block became false and the loop ended.
