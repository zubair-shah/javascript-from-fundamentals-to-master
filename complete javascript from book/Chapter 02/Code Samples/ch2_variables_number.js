// Number
// The number data type is used to represent, well, numbers. In many
// languages, there is a very clear difference between different types of
// numbers. The developers of JavaScript decided to go for one data type for
// all these numbers: number. To be more precise, they decided to go for a 64-
// bit floating-point number. This means that it can store rather large numbers
// and both signed and unsigned numbers, numbers with decimals, and more.
// However, there are different kinds of numbers it can represent. First of all,
// integers, for example: 4 or 89. But the number data type can also be used to
// represent decimals, exponentials, octal, hexadecimal, and binary numbers.
// The following code sample should speak for itself:
// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5
// You don't need to worry about these last three if you're not familiar with
// them. These are just different ways to represent numbers that you may
// encounter in the broader field of computer science. The takeaway here is
// that all the above numbers are of the number data type. So integers are
// numbers, like these ones:
// let intNr2 = 3434;
// let intNr3 = -111;
// And the floating points are numbers as well, like this one:
// let decNr2 = 45.78;
// And binary numbers are of the number data type as well, for example, this
// one:
// let binNr2 = 0b100; //decimal version would be 4
// We have just seen the number data type, which is very commonly used. But
// in some special cases, you will need an even bigger number

// BigInt
// The limits of the number data type are between 253-1 and -(253-1). In case
// you were to need a bigger (or smaller) number, BigInt comes into play. A
// BigInt data type can be recognized by the postfix n :
// let bigNr = 90071992547409920n;
// Let's see what happens when we start to do some calculations between our
// previously made integer Number, intNr , and BigInt, bigNr :
// let result = bigNr + intNr;
// The output will be as follows:
// Uh-oh, a TypeError ! It is very clear about what is going wrong. We cannot
// mix BigInt with the Number data type to perform operations. This is
// something to keep in mind for later when actually working with BigInt—
// you can only operate on BigInt with other BigInts.

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;

let bigNr = 90071992547409920n;
// typeError
let result = bigNr + intNr;
