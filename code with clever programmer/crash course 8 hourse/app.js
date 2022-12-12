// console.log("hello world")

// console.log('this is zubair')

// alert("woooo")

//variables

// var b = 'smoothie';
// console.log(b);

// var someNumber = 44;
// console.log(someNumber);

//Manipulation DOM with javascript
//its just a fancy way of saying change HTML with javascript

//var age = prompt("what is your age?");
document.getElementById("someText").innerHTML = "javascript with rafey Qazi";

//Numbers in javascript

// var num1 = 10;

//incriment by 1

// num1 = num1 +1;
//or fancy way
// num1++;
// console.log(num1)

//decrement by 1

// num1--;
// console.log(num1)

//Divide multiply and remainders
// console.log(num1*10)
// console.log(num1/10)
// console.log(num1%10)

//incrment / decrement by any number you want

// num1 += 10;
// console.log(num1)

//Function in javascript

/*functions
1.create functions
2.call the functions
*/
//create

// function fun(){
//     console.log('this is a function')
// }
//call
// fun();

/*lets create function that take in a name and says
hello followed by your name

for example
Name:qazi
return : hello qazi
*/
// function greeting(){
//     var name = prompt('what is your name?');
//     var result = 'Hello' + ' '+ name;
//     console.log(result)

// }
// greeting();

/*how do arguments work in function/
how do we add two numbers together in a function
*/

// function sumNumbers(num1,num2){
//     var result = num1+num2;
//     console.log(result);
// }
// sumNumbers(10,20);

/* while loops
var num = 0;
num +=1;
while (num < 100){
    console.log(num)
}
*/

//for loops
// for (let num=0;num<=100;num++){
//     console.log(num);
// }

//Datatypes

// let yourName = "zubair" //string
// let yourAge = 17; //numbers
// let name    = {first:'zubair',last:'shah'} //object
// let truth   = false; //boolean
// let groceries = ['apple','banana','mango'] //array
// let random;      //undefined
// let nothing   = null //value null

//strings in javascript common methods

// let fruits = "banana,apple,mango,blackbarry";
//  let moreFruits = 'banana\napple';  //new line
//  console.log(fruits.length);
// console.log(fruits.indexOf("nan"));
// console.log(fruits.slice(2, 6));
// console.log(fruits.replace("ban", "man"));
//  console.log(fruits.toLowerCase());
//  console.log(fruits.toUpperCase());
// console.log(fruits.charAt(3));
// console.log(fruits[4]);
//  console.log(fruits.split(','));  //split by comma
// console.log(fruits.split("")); //split by characters

//Array

let fruits = ["banana", "apple", "orange", "pineapple"];
// fruits = new Array("mango", "apple", "orange", "pineapple");

// console.log(fruits);

// fruits[0] = "pear";
// console.log(fruits);

// for (let i =0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// //array common method

// console.log("to string", fruits.toString());

// console.log(fruits.join(" "));
//console.log(fruits,fruits.pop(), fruits );
// console.log(fruits.pop(), fruits ); //remove last items
// console.log(fruits.push('blackberries'), fruits ); //appends
// console.log( fruits[4]);
//fruits.shift();//remove first element from a list
// console.log(fruits)
//fruits.unshift('kiwi');//Add first element to an array
// console.log(fruits)
//let vegetables = ['aloo','tomato','onion'];
//let  allgroceries = fruits.concat(vegetables); //combine arrays
// console.log (allgroceries);
//console.log (allgroceries.slice(1,4));
//console.log (allgroceries.reverse());
//console.log (allgroceries.sort());

// let someNumber = [5, 4, 6, 7, 8, 4, 3, 2, 45, 66, 77, 5, 74, 3];
//  console.log(someNumber.sort(function(a,b) {return a-b})); //
// console.log(
//   someNumber.sort(function (a, b) {
//     return b - a;
//   })
// );

//  let emptyArray = new Array();
//  for (let num = 0;num<=10;num++){
//      emptyArray.push(num);
// }
// console.log(emptyArray);

//Objects in javascript
// //dictionary in python

// let student = {
//   first: "zubair",
//   last: "shah",
//   age: 18,
//   height: 185,
//   studentInfo: function () {
//     return this.first + "\n" + this.last + "\n" + this.age;
//   },
// };
// console.log(student.first);
// console.log(student.last);
// student.first = "not zubair"; //change value
// console.log(student.first);
// student.age++;
// console.log(student.age);

// console.log(student.studentInfo());

//if else conditionals and switch statements
// 18 - 35 is my target demographic
//&& and
//  || or

// var age = +prompt('what is your age');
//   if ( (age >= 18) && (age <= 35) ) {
//    status = 'target demo';
//    console.log(status);
//   }
//   else{
//       status="not my audience";
//       console.log(status);
//   }

// switch statements
// diffrentiate between weekday / weekend

// day 0 sunday --> weekend
// day 1 monday --> weekday
// day 2 tuesday --> weekday
// day 3 wednesday --> weekday
// day 4 thursday --> weekday
// day 5 friday --> weekend
// day 6 saturday --> weekend

// switch(5){
//     case 0:
//     text = 'weekend';
//     break;
//     case 5:
//     text = 'weekend';
//     break;
//     case 6:
//     text = 'weekend';
//     break;

//     default:
//         text = 'weekday';

// }
// console.log(text)

// json learning
// it is a type of data linke object
