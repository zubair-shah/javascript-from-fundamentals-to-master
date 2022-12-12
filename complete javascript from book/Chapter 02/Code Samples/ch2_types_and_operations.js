// Working out the type of a variable
// Especially with null and undefined, it can be hard to determine what kind of
// data type you are dealing with. Let's have a look at typeof . This returns
// the type of the variable. You can check the type of a variable by entering
// typeof , then either a space followed by the variable in question, or the
// variable in question in brackets:
// testVariable = 1;
// variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// There is an odd one out, and that is the null type. In the output you can see
// that typeof null returns object , while in fact, null truly is a primitive
// and not an object. This is a bug that has been there since forever and now
// cannot be removed due to backward compatibility problems. Don't worry
// about this bug, as it won't affect our programs—just be aware of it, since it
// will go nowhere anytime soon, and it has the potential to break applications.

// But this is dangerous! Guess what this code snippet does:
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);
// This one will log 22 . The plus sign can be used to concatenate strings.
// Therefore, instead of converting a string to a number, it is converting a
// number to a string in this example, and clubbing the two strings together
// —" 2 " and " 2 " make " 22 ". Luckily, we do not need to rely on
// JavaScript's behavior when converting data types. There are built-in
// functions we can use to convert the data type of our variable.
// There are three conversion methods: String() , Number() , and
// Boolean() . The first one converts a variable to type String. It pretty much
// takes any value, including undefined and null, and puts quotes around it.
// The second one tries to convert a variable to a number. If that cannot be
// done logically, it will change the value into NaN (not a number).
// Boolean() converts a variable to a Boolean. This will be true for
// everything except for null, undefined, 0 (number), an empty string, and
// NaN. Let's see them in action:

// Operators
// After seeing quite a few data types and some ways to convert them, it is
// time for the next major building block: operators. These come in handy
// whenever we want to work with the variables, modify them, perform
// calculations on them, and compare them. They are called operators because
// we use them to operate on our variables.
// Arithmetic operators
// Arithmetic operators can be used to perform operations with numbers. Most
// of these operations will feel very natural to you because they are the basic
// mathematics you will have come across earlier in life already.
// Addition in JavaScript is very simple, we have seen it already. We use +
// for this operation:

// let nr1 = 12;
// let nr2 = 14;
// let str1 = "Hello ";
// let str2 = "addition";
// let result1 = nr1 + nr2;
// let result2 = str1 + str2;
// console.log(result1, result2);

// Subtraction;
// Subtraction works as we would expect it as well. We use - for this
// operation. What do you think gets stored in the variable in this second
// example?

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi ";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// Multiplication;
// We can multiply two numeric values with the * character. Unlike some
// other languages, we cannot successfully multiply a number and a string in
// JavaScript.

// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// Division;
// Another straightforward operator is division. We can divide two numbers
// with the / character:

// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// Exponentiation;
// Exponentiation means raising a certain base number to the power of the
// exponent, for example, x
// y
// . This can be read as x to the power of y. It means
// that we will multiply x by itself y number of times. Here is an example of
// how to do this in JavaScript—we use ** for this operator:

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

// Modulus;
// This is one that often requires a little explanation. Modulus is the operation
// in which you determine how much is left after dividing a number by
// another number in its entirety. The amount of times the number can fit in
// the other number does not matter here. The outcome will be the remainder,
// or what is left over. The character we use for this operation is the %
// character. Here are some examples:

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);

// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);

// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);

// Unary operators: increment and decrement
// The last two operators of our arithmetic operator section are probably new
// to you, if you are new to programming (or only familiar with another
// programming language). These are the increment and decrement operators.
// A term we use here is operand. Operands are subject to the operator. So, if
// we say x + y , x and y are operands.
// We only need one operand for these operators, and therefore we also call
// them unary operators. If we see x++ , we can read this as x = x + 1. The
// same is true for the decrement operators: x-- can be read as x = x – 1:
// let nr = 4;
// nr++;
// console.log(nr);

// Prefix and postfix operators
// We can have the increment operator after the operand ( x++ ), in which case
// we call this the postfix unary operator. We can also have it before (++x ),
// which is the prefix unary operator. This does something different though
// —the next few lines might be complicated, so do not worry if you need to
// read it a few times and have a good look at the examples here.
// The postfix gets executed after sending the variable through, and then after
// that, the operation gets executed. In the following example, nr gets
// incremented by 1 after logging. So the first logging statement is still
// logging the old value because it has not been updated yet. It has been
// updated for the second log statement:

// let nr = 2;
// console.log(nr++);
// console.log(nr);
// let nr = 2;
// console.log(++nr);

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

// Assignment operators
// We have seen one assignment operator already when we were assigning
// values to variables. The character for this basic assignment operation is = .
// There are a few others available. Every binary arithmetic operator has a
// corresponding assignment operator to write a shorter piece of code. For
// example, x += 5 means x = x + 5, and x **= 3 means x = x ** 3 (x to the
// power of 3).
// In this first example we declare a variable x , and set it to 2 as an initial
// value:
// let x = 2;
// x += 2;
// After this assignment operation, the value of x becomes 4, because x += 2
// is the same as x = x + 2:
// In the next assignment operation, we will subtract 2 :
// x -= 2;
// So, after this operation the value of x becomes 2 again (x = x – 2). In the
// next operation, we are going to multiply the value by 6:
// x *= 6;
// When this line has been executed, the value of x is no longer 2, but
// becomes 12 (x = x * 6). In the next line, we are going to use an assignment
// operator to perform a division:
// x /= 3;
// After dividing x by 3 , the new value becomes 4. The next assignment
// operator we will use is exponentiation:
// x **= 2;
// The value of x becomes 16, because the old value was 4, and 4 to the
// power of 2 equals 16 (4 * 4). The last assignment operator we will talk
// about is the modulus assignment operator:
// x %= 3;
// After this assignment operation, the value of x is 1, because 3 can fit 5
// times into 16 and then leaves 1.

// Comparison operators
// Comparison operators are different from the operators we have seen so far.
// The outcome of the comparison operators is always a Boolean, true, or
// false.

// Equal
// There are a few equality operators that determine whether two values are
// equal. They come in two flavors: equal value only, or equal value and data
// type. The first one returns true when the values are equal, even though the
// type is different, while the second returns true only when the value and the
// type are the same:
// let x = 5;
// let y = "5";
// console.log(x == y);
// The double equals operator, two equal signs, means that it will only check
// for equal value and not for data type. Both have the value 5 , so it will log
// true to the console. This type of equality is sometimes called loose
// equality.
