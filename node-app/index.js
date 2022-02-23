// const http = require('http')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()


// open-api-generator
// swagger integration
// linting rules
// git pre-hooks
app.use(bodyparser.json())

let users = [];
app.get('/user/', require('./mymiddleware'), require('./middleware'), (req, res, next)=>{
    // console.log('I am here')
    res.send({data:users})
})

app.post('/user/', (req, res, next)=>{
    let body = req.body;
    console.log(body)
    users.push(body);
    res.send({message:'User added successfully....'})
})

app.delete('/user/:id', (req, res, next)=>{
    const params = req.params;
    res.send({data:users})
})

app.put('/user/:id', (req, res, next)=>{
    const params = req.params;
    res.send({data:users})
})

// mandatory
// rest api
// GET, POST, DELETE, PUT
// [] = [{}, {}, {}]


// const server = http.createServer()

// server.listen(5002, 'localhost', ()=>{
//     console.log('Server Started');
// });

app.listen(5002, 'localhost', function(){
    console.log('Server Started');
})
