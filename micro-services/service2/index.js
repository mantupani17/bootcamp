const express = require('express')

const app = express();

app.get('/service-2', (req, res, next)=>{
    res.send("Service 2 running");
})

app.listen(3002, ()=>{
    console.log('service 2 started')
})

