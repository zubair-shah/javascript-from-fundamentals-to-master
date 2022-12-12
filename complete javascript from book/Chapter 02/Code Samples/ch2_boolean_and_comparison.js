// Boolean
// The Boolean data type can hold two values: true and false . There is
// nothing in between. This Boolean is used a lot in code, especially
// expressions that evaluate to a Boolean:
// let bool1 = false;
// let bool2 = true;
// In the preceding example, you can see the options we have for the Boolean
// data type. It is used for situations in which you want to store a true or a
// false value (which can indicate on/off or yes/no). For example, whether
// an element is deleted:
// Uncaught TypeError: Cannot mix BigInt and other types, use expli
// let objectIsDeleted = false;
// Or, whether the light is on or off:
// let lightIsOn = true;
// These variables suggest respectively that the specified object is not deleted,
// and that the specific light is on.

let bool1 = false;
let bool2 = true;
console.log(typeof bool1);

// Symbol
// Symbol is a brand new data type introduced in ES6 (we mentioned ECMA
// Script 6, or ES6, in Chapter 1, Getting Started with JavaScript). Symbol
// can be used when it is important that variables are not equal, even though
// their value and type are the same (in this case, they would both be of the
// symbol type). Compare the following string declarations to the symbol
// declarations, all of equal value:
// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);
// And the output:
// These two strings are the same: true
// These two Symbols are the same: false
// In the first half, JavaScript concludes that the strings are the same. They
// have the same value, and the same type. However, in the second part, each
// symbol is unique. Therefore, although they contain the same string, they are
// not the same, and output false when compared. These symbol data types
// can be very handy as properties of objects, which we will see in Chapter 3,
// JavaScript Multiple Values.

// Comparison operators
// Comparison operators are different from the operators we have seen so far.
// The outcome of the comparison operators is always a Boolean, true, or
// false.
// Equal;
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
// The triple equals operator, written as three equal signs, means that it will
// evaluate both the value and the data type to determine whether both sides
// are equal or not. They both need to be equal in order for this statement to be
// true, but they are not and therefore the following statement outputs false :
// console.log(x === y);
// This is sometimes also called strict equality. This triple equals operator is
// the one you should most commonly be using when you need to check for
// equality, as only with this one can you be sure that both variables are really
// equal.

// Not equal
// Not equal is very similar to equal, except it does the opposite—it returns
// true when two variables are not equal, and false when they are equal. We
// use the exclamation mark for not equal:
// let x = 5;
// let y = "5";
// console.log(x != y);
// console.log(x !== y);

// This will conclude that since x and y have different data types, they are
// not the same, and will log true to the console.
// Greater than and smaller than
// The greater than operator returns true if the left-hand side is greater than the
// right-hand side of the operation. We use the > character for this. We also
// have a greater than or equal to operator, >= , which returns true if the lefthand side is greater than or equal to the right-hand side.
// let x = 5;
// let y = 6;
// console.log(y > x);
// It might not surprise you that we also have smaller than ( < ) and smaller
// than or equal to operators ( <= ). Let's have a look at the smaller than
// operator, as it is very similar to the previous ones.

// console.log(y < x);

// Logical operators

// Whenever you want to check two conditions in one, or you need to negate a
// condition, the logical operators come in handy. You can use and, or, and
// not.
// And
// The first one we will have a look at is and. If you want to check whether x
// is greater than y and y is greater than z , you would need to be able to
// combine two expressions. This can be done with the && operator. It will
// only return true if both expressions are true:
// let x = 1;
// let y = 2;
// let z = 3;

// With these variables in mind, we are going to have a look at the logical
// operators:
// console.log(x < y && y < z);

// console.log(x > y && y < z);

// Or
// If you want to get true if either one of the expressions is true, you use or.
// The operator for this is || . These pipes are used to see if either one of
// these two is true, in which case the whole expression evaluates to true .
// Let's have a look at the or operator in action:

// console.log(x > y || y < z);

// Not
// In some cases you will have to negate a Boolean. This will make it the
// opposite value. It can be done with the exclamation mark, which reads as
//     not:
// let x = false;
// console.log(!x);

// let x = 1;
// let y = 2;
// console.log(!(x < y));
// x is smaller than y , so the expression evaluates to true . But, it gets
// negated due to the exclamation mark and prints false to the console.
