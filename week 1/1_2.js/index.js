var name = "raj";

// DYNAMICALLY TYPED LANGUAGE

let a = 10;
a = "hello"; // No error, a is now a string
console.log(a); // Output: hello

// SINGLE-THREADED LANGUAGE

a=0;
while (true){
    a++;
}

// VARIABLES
let b = 20; // Block scoped variable can assigned a new value
var c = 30; // Function scoped variable 
const d = 40; // Block scoped constant, cannot be reassigned

// depiciated means js me ye word already use ho chuka hai koi or word use kro
name = "rajat"; // Reassigning a variable is allowed

// why undefined on terminal?
let name = "raj"
// because this variable does not return any value


let x = 10;
let x = 15; // Re-declaring a variable is allowed with let
x = 20; // Reassigning a variable is allowed