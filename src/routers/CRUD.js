const express = require('express')
const CRUD = express.Router()
const {insertData, fetchdata} = require('../controllers/crudController') 



// making post api

CRUD.post('/post/data' , insertData )

CRUD.get('/fetch' , fetchdata)

module.exports = CRUD