// SESSION STORAGE

sessionStorage.setItem("fname", "Aamir")
sessionStorage.setItem("lname", "Pinger")

let abc = sessionStorage.getItem("fname")

console.log(abc)                      //RESULT: Aamir

sessionStorage.removeItem("fname")

sessionStorage.getItem("fname")       //RESULT: nothing will be displyed

console.log(sessionStorage.key(0))    //RESULT: lname (This value can be different)

console.log(sessionStorage.length)    //RESULT: 1 (This value can be different)

 sessionStorage.clear()               //this line will remove all the data from session storage

console.log(sessionStorage.length)    //RESULT: 0 (This value can be different)

