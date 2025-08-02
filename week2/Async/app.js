// NORMAL FUNCITON

// find sum of 2 numbers

// function sum(a,b){
//     return a+b;
// }
// let ans = sum(2,3);
// console.log(ans);
// function sum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// let ans2 = sum("23",3);
// console.log(ans2);

// // find sum from 1 to a number
// function sum(n){
//     let ans3=0
//     for(let i =0;i<=n;i++){
//         ans3 = ans3+i
//     }
//     return ans3;

//     // or 
//     return n(n*1); // BETTER APPROAACH

// }
// console.log(sum(6));

// NEVER USE THE SAME NAME OF THE FUNCTION THATS WHY ANSER IS GETTING WRONG


// Single threaded:-one line at a time.

// SYNCHRONOUS CODE

// Synchronous code is executed line by line, in the order it's written. 
// Each operation waits for the previous one to complete before moving on to the next one.

// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);


// I/O HEAVY OPERATION

// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices.
//  These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices,
//  which can be time-consuming compared to in-memory computations.

// Examples of I/O Heavy Operations:
// Reading a file
// Starting a clock
// HTTP Requests



// READING A FILE
// const fs = require('fs');
// const contents = fs.readFileSync('a.txt');//bytes ,hex
// // const contents2 = fs.readFileSync('a.txt','utf-8');//english
// const contents2 = fs.readFileSync('a.txt','utf-8',print);//in sync function there is only two parameteres if u pass 3 than it will ignore the 3rd argument.
// console.log(contents);
// console.log(contents2);


// READING 2 FILE AT A TIME
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// Here fs is a object and readfilesync is a keyvalue as a function.

// I/O bound tasks vs CPU bound tasks
// CPU bound tasks
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. 
// These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	

// I/O bound tasks
// I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, 
// network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O const fs = require("fs");

// const fs = require('fs')
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// fs.readFile vs fs.readFileSync


// SYNCHRONOUSLY CODE
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// const contents3 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents3);


// ASYNCHRONOUSLY CODE
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});








// FUNCTIONAL ARGUMENT

// Write a calculator program that adds, subtracts, multiplies, divides two arguments.

// APPROACH 1
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(sum(1, 2))


// Approach #2
// Passing in what needs to be done as an argument.
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))

// Asynchronous code,
// callbacks
// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback 
// since the function gets called back when the file is read 

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// setTimeout
// setTimeout is another asynchronous function that executes a certain code after some time
function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");




// passing a function to another function as an argument.

// const fs = require('fs');
// function print(err,data){
//     // NOT A GOOD WAY TO DO THIS

//     // console.log('data is:');
//     // console.log(data);
//     // console.log('error is:');
//     // console.log(err);

//     // BETTER WAY TO DO THIS

//     if(err){
//         console.log('file not found');
//         // type of err is always a object because it covered lot of info.like status,err,metadata etc
//     }else{
//         console.log(data);
        
//     }
// }
// fs.readFile('a.txt','utf-8',print);//asynchronously

// console.log('done');

// function readFile(filepath,encoding,op){
//     // read file
//     op('error! ', 'hi there')
// }


// ANOTHER EXAMPLE OF ASYNC JS

// function timeout(){
//     console.log('click the button!');
// }
// console.log('hi');
// setTimeout(timeout, 15000);

// console.log('welcome tho the loupe');
// let c =0;
// for(let i=0;i<10000000000;i++){
//     c=c+i;
// }
// console.log('expensive opertaion done');

