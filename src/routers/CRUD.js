const express = require('express')
const CRUD = express.Router()
const {insertData, fetchdata , UpdateData , deleteUser} = require('../controllers/crudController') 



// making post api

CRUD.post('/post/data' , insertData )

CRUD.get('/fetch' , fetchdata)

CRUD.patch('/update' , UpdateData)

CRUD.delete('/delete' , deleteUser)

module.exports = CRUD