let myList = [{
    "name": "Learn JavaScript",
    "status": true
},
{
    "name": "Try JSON",
    "status": false
}
];
console.log(myList)
const newStr = JSON.stringify(myList);
console.log(newStr)
// const newObj = JSON.parse(newStr);
// console.log(newObj)
// newObj.forEach((el)=>{
//     console.log(el);
// });
