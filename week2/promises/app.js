// What we’re doing today
// Classes in JS
// Revise callbacks
// Callback hell
// Promises
// Async await



// const { log } = require("node:console");

// const { log } = require("node:console");

// CLASSES IN JS

// Using objects
// const rect1 ={
//     width:2,
//     height:3,
//     color:'red'
// }
// function area(rect){
//     return rect.width * rect.height;
// }
// const ans = area(rect1);
// console.log(ans);


// USING CLASSES 
// USER DEFINED CLASSES

// class Rectangle{
//     constructor(width,height,color){
//         this.width=width;
//         this.height=height;
//         this.color=color;
//         // this.name=color
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`painting with color: ${this.color}`);
        
//     }
// }
// const rect = new Rectangle(2,4,'red')
// console.log(rect.width);
// console.log(rect.name);
// rect.paint()

// const area = rect.area();
// console.log(area);


// QUESTION why we need to create classes ?

// PREDEFINED CLASSES
// Date(),Map()

// Date class
// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());


// Map class =>they are like objects

// const map = new Map()
// map.set('name','alice');
// map.set('age',30);
// console.log(map.get('name'));

// An instance is equal to an object of class
// instance examples:-map,date


// PROMISE

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting 
// value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and
// more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

// Promise class gives u a promise, that i will return u something in the future
// eg:-settimeout

// USING A FUNCTION THAT RETURNS A PROMISE
// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)


// defining a promise is hard
// using a promise is easy

// callback based approach or Promise based approach

// setTimeout
// returns an object of the promise class

// PROMISE BASED APPROACH
// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log('3 second have passed');
// }
// setTimeoutPromisified(3000).then(callback) // returning u a object of the promise class


// // Using Callback

// function callback(){
//     console.log('some time has passed');
    
// }
// setTimeout(callback, 3000);


// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

// SOLUTION
// function loghi(){
//     console.log('hi');
//     setTimeout(loghello,3000)
// }
// function loghello(){
//     console.log('hello');
//     setTimeout(loghellothere,5000)    
// }
// function loghellothere(){
//     console.log('hello there');
// }
// setTimeout(loghi,1000);

// Alternative Approach:-Callback Hell
// setTimeout(function loghi(){
//     console.log('hi');
//     setTimeout(function loghello(){
//         console.log('hello');
//         setTimeout(function(){
//             console.log('hello there');
            
//         },5000)
//     },3000)
// },1000)



// PROMISIFIED VERSION 
// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }

// setTimeoutPromisified(1000)
// .then(function hi(){
//     console.log('hi');
//     setTimeoutPromisified(3000)
//     .then(function hello(){
//     console.log('hello');
//     setTimeoutPromisified(5000)
//     .then(function hellothere(){
//     console.log('hello there');
// })
// })
// })


// Alternative
// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }

// setTimeoutPromisified(1000)
// .then(function hi(){
//     console.log('hi');
//     return setTimeoutPromisified(3000)
//     .then(function hello(){
//         console.log('hello');
//         return setTimeoutPromisified(5000)
//     })
//     .then(function hellothere(){
//         console.log('hello there');
        
//     })
// })


// Async await syntax
// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code,
// making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises. 

// Assignment
// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2


// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();

// Things to keep in mind
// You can only call await inside a function if that function is async
// You cant have a top level await


// Defining your own async function
// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

// 1. Callback approach
// In the callback approach, the function signature should look something like this - 
// function onDone() {
// 	console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone)

// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }

// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);


// 2. Promisified approach
// In the promisified approach, the function signature should look something like this - 
// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   return new Promise(function (resolve) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       data = data.trim();
//       fs.writeFile(filePath, data, function () {
//         resolve();
//       });
//     });
//   });
// }

// async function main() {
//   await cleanFile("a.txt");
//   console.log("Done cleaning file");
// }

// main();


// err first callback vs rejects in promises
// Callbacks
// fs.readFile function used an err first callback approach to propagate back errors

// const fs = require("fs")
// function afterDone(err, data) {
//   if (err) {
//     console.log("Error while reading file");
//   } else {
//     console.log(data)
//   }
// }

// fs.readFile("a.txt", "utf-8", afterDone);

// Promises
// Promises use the reject  argument to propagate errors
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);