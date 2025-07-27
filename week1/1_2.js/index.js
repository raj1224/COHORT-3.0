var name = "raj";

// DYNAMICALLY TYPED LANGUAGE

let a = 10;
a = "hello"; // No error, a is now a string
console.log(a); // Output: hello

// SINGLE-THREADED LANGUAGE

// a=0;
// while (true){
//     a++;
// }

// VARIABLES
let b = 20; // Block scoped variable can assigned a new value
var c = 30; // Function scoped variable 
const d = 40; // Block scoped constant, cannot be reassigned

// depiciated means js me ye word already use ho chuka hai koi or word use kro
name = "rajat"; // Reassigning a variable is allowed

// why undefined on terminal?
// let name = "raj"
// because this variable does not return any value


// let x = 10;
// let x = 15; // Re-declaring a variable is allowed with let
x = 20; // Reassigning a variable is allowed

// DYNAMICALLY TYPED LANGUAGE

var x = 10; 
x = "hello"; // No error, x is now a string
x=true; // No error, x is now a boolean
console.log(x); // Output: hello

// SINGLE-THREADED LANGUAGE
// JavaScript executes code in a single-threaded environment,
//  meaning it processes one task at a time. We will dive deeper into this next week.

// GARBAGE COLLECTION
// JavaScript automatically manages memory allocation and deallocation through garbage collection, 
// which helps prevent memory leaks by automatically reclaiming memory used by objects no longer in use.
 
// Example of garbage collection
// let obj = { name: "John" };
// obj = null; // The object is no longer referenced, allowing garbage collection to reclaim memory

// GARBAGE COLLECTION VS MANUAL MEMORY MANAGEMENT VS THE RUST WAY ?



// VARIABLES
// let name = "John";     // Variable that can be reassigned
// const age = 30;        // Constant variable that cannot be reassigned
// var isStudent = true;  // Older way to declare variables, function-scoped

// ASSIGNMENT
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza.
//  Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// Ans:-
let favColor = "white";
const heigtInCm = 169;
var likePizza = true;
console.log(`Favorite Color: ${favColor}, Height: ${heigtInCm} cm, Likes Pizza: ${likePizza}`);

// DATA TYPES

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

// OPERATORS
// let sum = 10 + 5;          // Arithmetic operator
// let isEqual = (10 === 10); // Comparison operator
// let isTrue = (true && false); // Logical operator

// FUNCTIONS
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

// ASSINGMENT QUESTION

// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(5, 10)); // Output: 15
// console.log(sum("5", 10)); // Output: "510" (string concatenation)

// ASSIGNMENT QUESTION 2:- Write a function called canVote that returns true or false if the age of a user is > 18

// function canvote(age){
//     if(age>18){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(canvote(121));


// // IF /ELSE
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }


// ASSIGNMENT QUESTION
// Write an if/else statement that checks if a number is even or odd.
//  If it's even, print "The number is even." Otherwise, print "The number is odd."

// let num = 15;
// if(num%2==0){
//     console.log(`the ${num} is even`);
// }else{
//     console.log(`the ${num} is odd`);
// }

// LOOPS
// For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Outputs 0 to 4
// }

// // While loop
// let j = 0;
// while (j < 5) {
//     console.log(j); // Outputs 0 to 4
//     j++;
// }


// ASSIGNMENT QUESTION
// Write a function called sum that finds the sum from 1 to a number

function sum(n){
    let num=1
    let sum=0
    
    while(num<=n){
        sum = num+sum;
        num++;
    }
    return sum

}
console.log(sum(3));


// OBJECTS
// An object in JavaScript is a collection of key-value pairs,
//  where each key is a string and each value can be any valid JavaScript data type, 
// including another object.

let user = {
	name: "Harkirat",
	age: 19
}

console.log("Harkirats age is " + user.age);

// ASSIGNMENT 
// Write a function that takes a user as an input and greets them with their name and age

// function users(name,age){
//     console.log(`hello ${name} your age is ${age}`);
    
// }
// let name = prompt('enter your name')
// let age = prompt('enter your age')
// users(name,age)


// ASSIGNMENT QUESTION
// Write a function that takes a new object as input which has name , age  and gender and greets 
// the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

// function greets(obj){
//     let a;
//     if(obj.gender==="male"){
//         a="mr"
//     }else if(obj.gender==="female"){
//         a="mrs"
//     }else if(obj.gender==='others'){
//         a="others"
//     }
//     console.log(`hi ${a}.${obj.name}, your age is ${obj.age}`);
//     if(obj.age<18){
//         console.log(`sorry ${obj.name} you are under age can't vote`);
//     }else{
//         console.log(`congrates ${obj.name} you are elligiable to vote`);

//     }
    
// }
// let obj = {
//     name:'raj',
//     age:21,
//     gender:'male'
// }
// greets(obj)



// ARRAYS
// Arrays let you group data together

// const users = ["harkirat", "raman", "diljeet"];
// const tatalUsers = users.length;
// const firstUser = users[0];

// ASSIGNMENT QUESTION
// Write a function that takes an array of numbers as input,
//  and returns a new array with only even values. Read about filter in JS

// function arr1(array){
//     let newarr =array.filter((arr)=>{
//         if(arr%2===0){
//             return arr
//         }
//     })
//     console.log(newarr);
// }

// let arr=[3,25,25,161,262,62];
// arr1(arr)


// ARRAY OF OBJECTS
// We can have more complex objects, for example an array of objects
// const users = [{
// 		name: "Harkirat",
// 		age: 21
// 	}, {
// 		name: "raman",
// 		age: 22
// 	}
// ]

// const user1 = users[0] 
// const user1Age = users[0].age

// ASSIGNMENT QUESTIONS
// Write a function that takes an array of users as inputs
// and returns only the users who are more than 18 years old

// function array(arr){
//     arr.filter((arr)=>{
//         if(arr.age>18){
//             console.log(arr);
            
//         }
//     })
// }
// let arr =[
//     {
//         name:'raj',
//         age:21,
//     },
//     {
//         name:'pinky',
//         age:28,
//     }
// ]
// array(arr)


// OBJECTS OF OBJECTS
// We can have an even more complex object (object of objects)
// const user1 = {
// 	name: "harkirat",
// 	age: 19,
// 	address: {
// 		city: "Delhi",
// 		country: "India",
// 		address: "1122 DLF"
// 	}
// }

// const city = user1.address.city;

// ASSIGNMENT QUESTION:-
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

// function array(arr){
//     arr.filter((arr)=>{
//         if((arr.age>18)&&(arr.gender==="male")){
//             console.log(arr);    
//         }
//     })
// }
// let arr =[
//     {
//         name:'raj',
//         age:21,
//         gender:'male'
//     },
//     {
//         name:'pinky',
//         age:28,
//         gender:'female'
//     }
// ]
// array(arr)


