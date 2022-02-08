// Variable Hoisting
// A variable is declared by let and const will not be hoisted but by var can be hoisted
// eg. here the code will not break because its declared by var 
console.log(x)
var x = 10;

// eg. here the code will break because we are accessing the variable before initializing
// console.log(y, z) // Throws ReferenceError exception as the variable value is uninitialized
let y = 15;
const z = 30;

// Function Hoisting
// function declaration can be hoisted but expression not
sayHello();
function sayHello(){
    console.log("Hello!")
}
sayHello();

// here this will not hoist because its a function expression and this will return an error
// helloWorld();
var helloWorld = () =>{
    console.log("Hello World!")
}
// classes in javascript will not hoist 
// ReferenceError: Cannot access 'Student' before initialization
var stu = new Student()
class Student{

}