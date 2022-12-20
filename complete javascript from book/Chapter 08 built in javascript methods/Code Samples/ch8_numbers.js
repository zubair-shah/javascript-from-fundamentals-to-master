// Number methods
// Let's move on to some built-in methods on the Number object. We have
// seen a few already, these are so popular that some of them have been made
// into global methods.

// Checking if something is (not) a number
// This can be done with isNaN() . We have seen this already when we talked
// about global methods, we can use this method without Number in front of
// it. Often you will want to do the opposite, you can negate the function with
// an ! in front of it:

let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));

//  And this one?

let str1 = "5";
console.log(isNaN(str1));
// Some funky stuff is going on here, even though 5 is between quotation
// marks, JavaScript still sees that it's a 5 and it will log false . At this point,
// I'm sure you'd wish your partner, family, and coworkers are as
// understanding and forgiving as JavaScript.

// Checking if something is finite
// By now you might be able to guess the name of the method on Number that
// checks whether something is finite. It is a very popular one and has been
// made into a global method as well, and its name is isFinite() . It returns
// false for NaN , Infinity , and undefined , and true for all other values:

let x = 3;
let str = "finite";
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));

// This will log:
// true
// false
// false
// false

// The only finite number in this list is x . The others are not finite. A string is
// a not a number and is therefore not finite. Infinity is not finite and 10
// divided by 0 returns Infinity

// Checking if something is an integer
// Yes, this is done with isInteger() . Unlike isNaN() and isFinite() ,
// isInteger() has not been made global and we will have to refer to the
// Number object to use it. It really does what you think it would: it returns
// true if the value is an integer and false when it's not:

let x = 3;
let str = "integer";
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));

// Specifying a number of decimals
// We can tell JavaScript how many decimals to use with the toFixed()
// method. This is different from the rounding methods in Math , since we can
// specify the number of decimals here. It doesn't change the original value, so
// we'll have to store the result:

let x = 1.23456;
let newX = x.toFixed(2);
// This will only leave two decimals, so the value of newX will be 1.23 . It
// rounds the number normally; you can see this when we ask for one more
// decimal:

let x = 1.23456;
let newX = x.toFixed(3);
console.log(x, newX);

// Specifying precision
// There is also a method to specify precision. Again this is different from the
// rounding methods in the Math class, since we can specify the total number
// of numbers to look at. This comes down to JavaScript looking at the total
// number of numbers. It is also counting the ones before the dot:

let x = 1.23456;
let newX = x.toPrecision(2);

// So the value of newX will be 1.2 here. And also here, it is rounding the
// numbers:
let x = 1.23456;
let newX = x.toPrecision(4);
console.log(newX);
