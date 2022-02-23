const express = require('express')

const app = express();

app.get('/service-1', (req, res, next)=>{
    res.send("Service 1 running");
})

app.listen(3001, ()=>{
    console.log('service 1 started')
})

