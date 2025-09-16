const express = require('express')
const app = express()
require('dotenv').config()

app.get('/' , async(req,res)=>{
    res.send('Am working ')
})

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server is Listening '); 
})