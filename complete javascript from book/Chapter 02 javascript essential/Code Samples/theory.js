// In this chapter, we will be dealing with some essential building blocks of
// JavaScript: variables and operators. We will start with variables, what they
// are, and which different variable data types exist. We need these basic
// building blocks to store and work with variable values in our scripts,
// making them dynamic.
// Once we've got the variables covered, we will be ready to deal with
// operators. Arithmetic, assignment, and conditional and logical operators
// will be discussed at this stage. We need operators to modify our variables or
// to tell us something about these variables. This way we can do basic
// calculations based on factors such as user input.
// Along the way, we'll cover the following topics:
// Variables
// Primitive data types
// Analyzing and modifying data types
// Operators

// Variables;
// Variables are the first building block you will be introduced to when
// learning most languages. Variables are values in your code that can
// represent different values each time the code runs. Here is an example of
// two variables in a script:

// firstname = "Maaike";
// x = 2;

// And they can be assigned a new value while the code is running:
// firstname = "Edward";
// x = 7;
// Without variables, a piece of code would do the exact same thing every
// single time it was run. Even though that could still be helpful in some cases,
// it can be made much more powerful by working with variables to allow our
// code to do something different every time we run it.

// Declaring variables
// The first time you create a variable, you declare it. And you need a special
// word for that: let, var , or const .

// let, var, and const
// A variable definition consists of three parts: a variable-defining keyword
// ( let , var , or const ), a name, and a value. Let's start with the difference
// between let , var , or const . Here you can see some examples of
// variables using the different keywords:

// let nr1 = 12;
// var nr2 = 8;
// const PI = 3.14159;

// let and var are both used for variables that might have a new value
// assigned to them somewhere in the program. The difference between let
//  and var is complex.It is related to scope.

// var has global scope and let has block scope. var 's global scope means
// that you can use the variables defined with var in the entire script. On the
// other hand, let 's block scope means you can only use variables defined
// with let in the specific block of code in which they were defined.
// Remember, a block of code will always start with { and end with } ,
// which is how you can recognize them.

// On the other hand, const is used for variables that only get a value
// assigned once—for example, the value of pi, which will not change. If you
// try reassigning a value declared with const , you will get an error:

// const someConstant = 3;
// someConstant = 4;

// This will result in the following output:
// Uncaught TypeError: Assignment to constant variable.

// Naming variables
// When it comes to naming variables, there are some conventions in place:
// Variables start with a lowercase letter, and they should be descriptive.
// If something holds an age, do not call it x , but age . This way, when
// you read your script later, you can easily understand what you did by
// just reading your code.
// Variables cannot contain spaces, but they can use underscores. If you
// use a space, JavaScript doesn't recognize it as a single variable.
// We will be using camel case here. This means that when we want to use
// multiple words to describe a variable, we will start with a lowercase word,
// then use a capital for every new word after the first word—for example:
// ageOfBuyer .

// Note:
// Whatever the convention is in the place you are working, the key is
// consistency. If all naming is done in a similar format, the code will look
// cleaner and more readable, which makes it a lot easier to make a small
// change later.
// The value of your variable can be anything. Let's start with the easiest thing
// variables can be: primitives.
// Primitive data types
// Now you know what variables are and why we need them in our code, it is
// time to look at the different types of values we can store in variables.
// Variables get a value assigned. And these values can be of different types.
// JavaScript is a loosely typed language. This means that JavaScript
// determines the type based on the value. The type does not need to be named
// explicitly. For example, if you declared a value of 5, JavaScript will
// automatically define it as a number type.
// A distinction exists between primitive data types and other, more complex
// data types. In this chapter, we will cover the primitive type, which is a
// relatively simple data structure. Let's say for now that they just contain a
// value and have a type. JavaScript has seven primitives: String, Number,
// BigInt, Boolean, Symbol, undefined, and null. We'll discuss each of them in
// more detail below.
