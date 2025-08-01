// NORMAL FUNCITON

// find sum of 2 numbers

function sum(a,b){
    return a+b;
}
let ans = sum(2,3);
console.log(ans);
function sum(a,b){
    return parseInt(a)+parseInt(b);
}
let ans2 = sum("23",3);
console.log(ans2);

// find sum from 1 to a number
function sum(n){
    let ans3=0
    for(let i =0;i<=n;i++){
        ans3 = ans3+i
    }
    return ans3;

    // or 
    return n(n*1);

}
console.log(sum(6));

// NEVER USE THE SAME NAME OF THE FUNCTION THATS WHY ANSER IS GETTING WRONG


// Single threaded:-one line at a time.


const fs = require('fs');
const contents = fs.readFileSync('a.txt');//bytes ,hex
const contents2 = fs.readFileSync('a.txt','utf-8');//english
console.log(contents);
console.log(contents2);

// Here fs is a object and readfilesync is a keyvalue as a function.

// fs.readFile vs fs.readFileSync




// FUNCTIONAL ARGUMENT
// passing a function to another function as an argument.