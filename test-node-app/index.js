const express = require('express')
const port = 3001
const app = express()

app.use((req, res, next)=>{
   console.log(`logging in the app middleware`)
   next()
})

app.get('/', ( req, res )=>{
    try{

    }catch(e) {
        
    }
})

app.listen(port, ()=>{
    console.log(`Listening on the port - ${port}`)
})