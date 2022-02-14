// this is again a IIFE function which will execute immediately
(function(window, document){

window.addEventListener('load', loaded)
function loaded(e){
    var click = document.getElementById('click-me');
    click.addEventListener('click', callback)   
}
// what is a callback?
// it is a function which need to pass into another function as argument, it can be arrow function, function expression or higher order 
// Higher Order Function - https://eloquentjavascript.net/05_higher_order.html
// eg.

// once we click the button this will render the list of user names
// function callback(e){
//     var data = getUserData();
//     var container = document.getElementById('render-data');
//     const ul = document.createElement('ul');
//     for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//             const element = data[key];
//             const li = document.createElement('ul');
//             li.innerHTML = element.name;
//             li.id = element.id;
//             ul.append(li);
//         }
//     }
//     container.appendChild(ul);
// }

// without callback
// function callback(e){
//     var data = getUserData();
//     console.log(data)
//     renderData(data)
// }

// with callback
function callback(e){
    getUserData(renderData);
}


function renderData(data){
    var container = document.getElementById('render-data');
    const ul = document.createElement('ul');
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            const li = document.createElement('ul');
            li.innerHTML = element.name;
            li.id = element.id;
            ul.append(li);
        }
    }
    container.classList.remove('hide-me');
    container.classList.add('show-me');
    container.appendChild(ul);
}

// this code is handled by callback
function getUserData(cb){
    // suppose this is a DB request to fetch the data so this piece code will be a asynchronous type code
    // it will take time so i addded settimeout for demonstrating the scenario
    setTimeout(function(){
        cb([{name:"XYZ", id:1},{name:"ABC", id:2},{name:"PQR", id:3}])
    }, 2000)
}

// without callback
// function getUserData(){
//     // suppose this is a DB request to fetch the data so this piece code will be a asynchronous type code
//     // it will take time so i addded settimeout for demonstrating the scenario
//     setTimeout(function(){
//        return [{name:"XYZ", id:1},{name:"ABC", id:2},{name:"PQR", id:3}]
//     }, 20000)
// }


    // promises
    // promise is a function which is used to be resolve or resect
    // there are different states of a promise pending, fullfiled, rejected
    // when everything is fine the promise will resolve with fullfiled state
    // when any type of error is there then the promise will reject with rejected state
    // if the request is not resolved or rejected or not handled properly then it became in pending state
    // a promise will take a callback function as argument and then the call back function takes two different function 
    // resolve and reject
    // eg.
    // declare a promise
    let promise = new Promise((resolve, reject)=>{
        resolve()
    });

    let op = Promise.resolve(promise);
    op.then(()=>{console.log("Hello");})
    // console.log(op)

    function promiseFunction(){}


    function fetchUsers(cb) {
        // calling the api using fetch method
        const users = fetch('http://localhost:3000/api/v1/user/all?offset=0');
        users.then((response)=>{
            return response.json()
        }).then((data)=>{
            cb(data)
        })
    }

    fetchUsers((data)=>{
        console.log(data)
    })



})(window, document)

