const User = require('../Controllers/BookForm')
const express = require('express')
const Router = express.Router()

Router.post('/Book',User)

module.exports=Router;

