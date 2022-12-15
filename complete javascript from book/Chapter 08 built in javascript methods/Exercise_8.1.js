// Practice exercise 8.1
// Output the decodeURIComponent() for the string How's%20it%20going%3F
// to the console. Also, encode the string How's it going? to be output into
// the console. Create a web URL and encode the URI:
// 1. Add the strings as variables in the JavaScript code
// 2. Using encodeURIComponent() and decodeURIComponent() output the
// results into the console
// 3. Create a web URI with request parameters
// http://www.basescripts.com?=Hello World";
// let uri = "https://www.example.com/submit?name=maaike van putten
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);
// Encoded: https%3A%2F%2Fwww.example.com%2Fsubmit%3Fname%3Dmaaike%
// Decoded: https://www.example.com/submit?name=maaike van putten
// 4. Encode and output the web URI into the console

const secretMes1 = "How's%20it%20going%3F";
const secretMes2 = "How's it going?";
const decodedComp = decodeURIComponent(secretMes1);
console.log(decodedComp);
const encodedComp = encodeURIComponent(secretMes2);
console.log(encodedComp);
const uri = "http://www.basescripts.com?=Hello World";
const encoded = encodeURI(uri);
console.log(encoded);
