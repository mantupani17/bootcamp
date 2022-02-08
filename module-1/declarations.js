// to declare a variable 
// using var, let and const keyword we can declare a variable or function eg.
var variable1 = 10
let variable2 = 20
const variable3 = "CONSTANT"

// if you declare the variable using var it will hold the global scope but in case of let and const hold the block scope
// eg.

function showVariable(){
    x = 10;
    console.log(x);
}
showVariable()
var x = 10;


function letVariable(){
    console.log(y);
    console.log(z);
}

// letVariable()
let y = 10;
// const value can not be assignable
const z = 30;

// function declaration
// if the function is declared it can be hoisted before or after calling the function 
functionDeclared()
function functionDeclared(){
    console.log("Called the function...")
}
// functionDeclared()

// here its a function expression so it will not be hoisted
// functionExpression()
var functionExpression = function(){
    console.log('Expression called')
}
// functionExpression()

// IIFE declaration
var func = (function(g) {
    console.log('Code runs!')
})(10);

// declaration variable
var x;
console.log(x === undefined); // true
x = 3;
