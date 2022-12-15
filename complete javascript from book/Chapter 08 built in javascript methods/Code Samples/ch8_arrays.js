// Built-In JavaScript Methods
// We have just covered most of the basic building blocks in JavaScript. Now
// it's time to look at some powerful built-in methods that will make your life
// easier that we haven't seen yet. Built-in methods are functionality that we
// get out of the box with JavaScript. We can use these methods without
// having to code them first. This is something we have done a lot already, for
// example, console.log() and prompt() .
// Many built-in methods belong to built-in classes as well. These classes and
// their methods can be used at any time because JavaScript has already
// defined them. These classes exist for our convenience, since they are very
// common things to need, such as the Date , Array , and Object classes.

// Here are the topics covered in this chapter:
// Global JavaScript methods
// String methods
// Math methods
// Date methods
// Array methods
// Number methods

// We have seen many built-in JavaScript methods already. Any method that
// we didn't define ourselves is a built-in method. Some examples include
// console.log() , Math.random() , prompt() , and many more—think about
// methods on arrays for example. The difference between a method and a
// function is that a function is defined anywhere in the script, and a method is
// defined inside a class. So methods are pretty much functions on classes and
// instances.
// Methods can often be chained as well; this is only true for methods
// returning a result. The next method will then be performed on the result. So
// for example:

let s = "Hello";
console.log(
  s
    .concat(" there!")
    .toUpperCase()
    .replace("THERE", "you")
    .concat(" You're amazing!")
);

// We create a variable, s , and we store Hello in there on the first line. Then
// we want to be logging something. This code has been divided over different
// lines for readability, but it's actually one statement. We first perform a
// concat() method on our s variable, which appends a string to our string.
// So after that first operation the value is Hello there! . Then we transform
// this to uppercase with the next method. At that point the value is HELLO
// THERE! . Then we proceed to replace THERE with you . After that, the value
// becomes HELLO you! . We then append a string to it again and finally the
// value will be logged:
// HELLO you! You're amazing!
// We need to log or store the output in this example, because the original
// string value will not be updated by just calling methods on a string.

// Global methods
// The global JavaScript methods can be used without referring to the built-in
// object they are part of. This means that we can just use the method name as
// if it is a function that has been defined inside the scope we are in, without
// the "object" in front of it. For example, instead of writing:
// let x = 7;
// console.log(Number.isNaN(x));
// You can also write:
// console.log(isNaN(x));

let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}

let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
  return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

console.log(arr.every(checkString));

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 5);

let arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
console.log(arr);

let arr = [1, 2, 3, 4];
let mapped_arr = arr.map((x) => x + 1);
console.log(mapped_arr);

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("hi"));

let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

let letters = ["a", "b", "c"];
let x = letters.join("-");
console.log(x);
