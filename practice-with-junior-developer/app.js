/* ======================Exercise #01=============
write a javascript program to chek two numbers and return true 
if one of the number is 100
or if the sum the numbers is 100*/

function start(check) {
  var a = parseInt(prompt("enter your first num "));

  var b = parseInt(prompt("enter your second num "));

  var c = a + b;

  if (a == 100 || b == 100 || c == 100) {
    document.write(true);
  } else {
    document.write(false);
  }
}

//=================Ecma script solution ==============
const isToCheck100 = (a, b) => a === 100 || b === 100 || a + b === 100;

/* ======================Exercise #02=============
write a javascript program to get the extension of a file name
*/

const getExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(getExtension("stylecss."));

/* ======================Exercise #03=============
write a javascript program to replace every charecter in a given string with the charecter following it in the 
alphabet
*/
// fromCharCode()
// charCodeAt()

const moveForward = (str) => {
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
  console.log(str);
};

/* ======================Exercise #04=============
write a javascript program to get the current date in expected format 
mm-dd-yyyy,mm-dd-yyyy or dd-mm-yyyy,dd-mm-yyyy
*/
const currentDate = (newDate = new Date()) => {
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let day = newDate.getDay();
  console.log(` month ${month} and day ${day} year ${year} `);
};

// ============================Excercise #05=====================
//write a javascript program to create a new string "New!" in front of a given string  if the given string
// begins with "New!" already then return the original string
const newString = (str1) => {
  str1.split(" ");
  let word = "New!";
  console.log(str1);
};
