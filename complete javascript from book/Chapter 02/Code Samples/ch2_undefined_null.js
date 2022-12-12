// Undefined
// JavaScript is a very special language. It has a special data type for a
// variable that has not been assigned a value. And this data type is undefined:
// let unassigned;
// console.log(unassigned);
// The output here will be:
// Undefined
// We can also purposefully assign an undefined value. It is important you
// know that it is possible, but it is even more important that you know that
// manually assigning undefined is a bad practice:
// let terribleThingToDo = undefined;

let unassigned;
console.log(unassigned);

// null
// In the last example, we saw an issue that can be solved with a final
// primitive type, null. null is a special value for saying that a variable is
// empty or has an unknown value. This is case sensitive. You should use
// lowercase for null:
// let empty = null;
// To solve the issue we encountered with setting a variable as undefined, note
// that if you set it to null, you will not have the same problem. This is one of
// the reasons it is better to assign null to a variable when you want to say it is
// empty and unknown at first:

let terribleThingToDo = undefined;
let lastname;
console.log("Same undefined:", lastname === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastname === betterOption);
// This outputs the following:
// Same undefined: true
// Same null: false

let empty = null;
