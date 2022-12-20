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

let arr1 = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}
arr1.forEach(printStuff);

// As you can see, it called the printStuff() function for every element in
// the array. And we can also use the index, it is the second parameter. We
// don't need to control the flow of the loop here and we cannot get stuck at a
// certain point. We just need to specify what function needs to be executed
// for every element. And the element will be input for this function. This is
// used a lot, especially for a more functional programming style in which
// many methods get chained, for example, to process data.

// Filtering an array
// We can use the built-in filter() method on an array to alter which values
// are in the array. The filter method takes a function as an argument, and this
// function should return a Boolean. If the Boolean has the value true , the
// element will end up in the filtered array. If the Boolean has the value
// false , the element will be left out. You can see how it works here:

let arr2 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
  return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

// This will log to the console:
// [ 'squirrel', 'Tjed' ]
// It is important to realize that the original array has not changed, the
// filter() method returns a new array with the elements that made it
// through the filter. We capture it here in the variable filterArr .

// Checking a condition for all elements
// You can use the every() method to see whether something is true for all
// elements in the array. If that is the case, the every() method will return
// true , else it will return false . We are using the checkString() function
// and array from the previous example here:
// console.log(arr.every(checkString));
// This will log false , since not all elements are of type string in the array.

console.log(arr.every(checkString));


// Replacing part of an array with another part
// of the array
// The copyWithin() method can be used to replace a part of the array with
// another part of the array. In the first example we specify 3 arguments. The
// first one is the target position, to which the values get copied. The second
// one is the start of what to copy to the target position and the last one is the
// end of the sequence that will be copied to the target position; this last index
// is not included. Here we are only going to override position 0 with
// whatever is in position 3:


arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);

// We can also not specify an end at all; it will take the range to the end of the
// string:

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 5);

// If we specify a range with length 2 , the first two elements after the starting
// position get overridden:

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

// Mapping the values of an array
// Sometimes you'll need to change all the values in an array. With the array
// map() method you can do just that. This method will return a new array
// with all the new values. You'll have to say how to create these new values.
// This can be done with the arrow function. It is going to execute the arrow
// function for every element in the array, so for example:


let arr = [1, 2, 3, 4];
let mapped_arr = arr.map((x) => x + 1);
console.log(mapped_arr);


// This is what the console output with the new mapped array looks like:
// [ 2, 3, 4, 5 ]
// Using the arrow function, the map() method has created a new array, in
// which each of the original array values has been increased by 1.

// Finding the last occurrence in an array
// This will log 2 , because the index 2 holds the last bye variable. 

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));
// What do
// you think you'll get when you ask for the last index of something that's not
// there?

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("hi"));

// That's right (hopefully)! It's -1 .


let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

let letters = ["a", "b", "c"];
let x = letters.join("-");
console.log(x);
