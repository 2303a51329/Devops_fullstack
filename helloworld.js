/*console.log("Hello World from Node.js");

let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);*/

/*const fs = require('fs');
fs.writeFileSync("sample.txt", "This is a Node.js file");
console.log("File created successfully");*/


/*const fs = require('fs');
const data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);*/

/*const fs = require('fs');
fs.readFile("sample.txt", "utf-8", (err, data) => {
if (err) {
console.log("Error reading file");
} else {
console.log(data);
}
});*/


/*const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter a number: ", (num) => {
if (num % 2 === 0)
console.log("Even Number");
else
console.log("Odd Number");
rl.close();
});*/


/*function factorial(n) {
let fact = 1;
for (let i = 1; i <= n; i++) {
fact *= i;
}
return fact;
}
console.log("Factorial:", factorial(5));*/


/*const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter two numbers: ", (input) => {
let [a, b] = input.split(" ").map(Number);
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
rl.close();
});*/


const date = new Date();
console.log("Current Date & Time:", date.toLocaleString());


