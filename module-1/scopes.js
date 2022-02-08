// IIFE
(function(){
    // function scope
    var y = 15;
    function showX(){
        console.log(x)
    }

    // block scope
    {
        let z = 10
        const pi = '3.174' 
    }

    // console.log(z)
    helloWorld()
    // here q is hoisting because the variable is declared by var keyword and not in the scope
    console.log(q)
    // z is not in the scope 
    // console.log(z)
    // ReferenceError: Cannot access 'z' before initialization
    var x = 10;
    showX()
})()

// console.log(y)
var q = 16;
let z = 30;
function helloWorld(){
    console.log("Hello World!")
}

// using function as callback
function showData(cb){
    cb({data: "Hello world"})
}

showData(function(data){
    console.log(data)
})

// creating an unamed function
var ufunction = function(){
    console.log('Called unnamed function...')
}
ufunction()

// named function expression
var obj = {
    showData: function(){
        console.log("Show named function...");
    }
}

obj.showData()

// named function exp
console.log(notHoisted)//undefined
var functionExp = function(){}
var arrowFunctionExp = ()=>{}