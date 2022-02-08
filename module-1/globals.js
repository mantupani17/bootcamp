// in client side global is nothing but window/this/globalThis object
// in server side there is global object called globals

x = 10;
// console.log(global)
// you can find the global variabled in nodejs by using global object
console.log(global.x)

global.greetHello = function(){
    console.log('Hello World...')
}
// console.log(global)

greetHello()
global.greetHello() // we can access by either use of global keyword or normally

// in client side if u declare a variable in window without using keywords var,let and const 
// it would be a gloabal variable
// eg.
// y = 15
// console.log(window) you can find the y inside the window object
// console.log(window.y)
// while declaring global variables we need to consider the memory leak part, need to carefully handle