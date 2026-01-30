/*let a = 10;
let b = 20;
let sum = a + b;

console.log("total = ", sum);*/


/*let name = "John";
let age = 20;

console.log("Name:", name);
console.log("Age:", age);*/



/*let numbers = [10, 20, 30, 40];

console.log(numbers);
console.log(numbers[0]); 
console.log(numbers[1]); 
console.log(numbers[2]);*/


/*function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Sum =", result);*/


const http = require('node:http');
http.createServer((req, res) => {
res.end("Welcome to Node.js Server");
}).listen(3000);
console.log("Server running on port 3000");
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter your name: ", (name) => {
console.log("Hello " + name);
rl.close();
});

