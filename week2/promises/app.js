// const { log } = require("node:console");

const { log } = require("node:console");

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
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`painting with color ${this.color}`);
        
//     }
// }
// const rect = new Rectangle(2,4,'color')
// console.log(rect.width);
// rect.paint()

// const area = rect.area();
// console.log(area);


// PREDEFINED CLASSES
// Date(),Map()

// Date class
// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());


// Map class

// const map = new Map()
// map.set('name','alice');
// map.set('age',30);
// console.log(map.get('name'));

// An instance is equal to an object of class
// instance examples:-map,date


// PROMISE

// Promise class gives u a promise, that i will return u something in the future
// eg:-settimeout

// callback based approach or Promise based approach

// defining a promise is hard
// using a promise is easy


// setTimeout

// returns an object of the promise clss
function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
}

function callback(){
    console.log('3 second have passed');
}
setTimeoutPromisified(3000).then(callback) // returning u a object of the promise class


// Using Callback

function callback(){
    console.log('some time has passed');
    
}
setTimeout(callback, 3000);