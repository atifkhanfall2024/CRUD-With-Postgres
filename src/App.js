const express = require('express')
const app = express()
const Connections = require('./config/Connection')
require('dotenv').config()
const CRUD = require('./routers/CRUD')

// to listen post request to json
app.use(express.json())
app.use('/' , CRUD)


Connections.connect().then(()=>{
    console.log('Connection is Success');
    app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server is Listening '); 
})

}).catch((err)=>{
    console.log('Connection is Not Eastablished');
})
