// Parsing numbers
// There are different ways to parse strings to numbers. In many situations you
// will have to translate a string to a number, for example reading input boxes
// from an HTML web page. You cannot calculate with strings, but you can
// with numbers. Depending on what exactly you need to do, you will need
// either one of these methods.

// With the method parseInt() a string will be changed to an integer. This
// method is part of the Number class, but it is global and you can use it
// without the Number in front of it. Here you can see it in action:
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, "is", typeof int_int);

// Can you figure out the logic here? First of all, JavaScript doesn't like
// crashing or using errors as a way out, so it is trying to make it work to the
// best of its abilities. The parseInt() method simply stops parsing when it
// runs into a non-numeric character. This is the specified behavior, and you
// need to keep that in mind while working with parseInt() . In the first case,
// it stops parsing as soon as it finds the dot, so the result is 7 . And in the
// binary number case, it stops parsing as soon as it hits the b , and the result
// is 0 .

let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of", int_float, "is", typeof int_float);

let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);

// By now you can probably figure out what this does:

let str_nan = "hello!";
let int_nan = parseInt(str_nan);
console.log("Type of", int_nan, "is", typeof int_nan);

// Since the first character is non-numeric, JavaScript will convert this string
// to NaN . Here is the result that you will get in the console:
// Type of NaN is number
// So parseInt() can be a bit quirky, but it's very valuable. In the real world,
// it is used a lot to combine the input of users via web pages and calculations.

// Making floats with parseFloat()
// Similarly, we can use parseFloat() to parse a string to a float. It works
// exactly the same, except it can also understand decimal numbers and it
// doesn't quit parsing as soon as it runs into the first dot:

let str_float = "7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is", typeof float_float);
// This will log:
// Type of 7.6 is number

// Can you guess what happens when it runs into a second dot?
let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr);
console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// The strategy is similar to the parseInt() function. As soon as it finds a
// character it cannot interpret, a second dot in this case, it will stop parsing
// and just return the result so far. Then one more thing to note. It is not going
// to append a .0 to integers, so 6 is not going to become 6.0 . This
// example:

let str_int = "6";
let float_int = parseFloat(str_int);
console.log("Type of", float_int, "is", typeof float_int);

// Lastly, the behavior for binary numbers and strings is the same. It is going
// to stop parsing as soon as it runs into a character it cannot interpret:

let str_binary = "0b101";
let float_binary = parseFloat(str_binary);
console.log("Type of", float_binary, "is", typeof float_binary);

let str_nan = "hello!";
let float_nan = parseFloat(str_nan);
console.log("Type of", float_nan, "is", typeof float_nan);

// You will use the parseFloat() whenever you need a decimal number.
// However, it will not work with binary, hexadecimal, and octal values, so
// whenever you really need to work with these values or integers you'll have
// to use parseInt() .
