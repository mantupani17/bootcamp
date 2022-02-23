const express = require('express')

const app = express();

app.get('/service-3', (req, res, next)=>{
    res.send("Service 3 running");
})

app.listen(3003, ()=>{
    console.log('service 3 started')
})

