const express = require('express')
const CRUD = express.Router()
const {insertData} = require('../controllers/postController') 



// making post api

CRUD.post('/post/data' , insertData )

module.exports = CRUD