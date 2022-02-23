const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/s1', proxy('http://localhost:3001/'))
app.use('/s2', proxy('http://localhost:3002/'))
app.use('/s3', proxy('http://localhost:3003/'))

app.listen(3000, ()=>{
    console.log('running proxy server');
})
