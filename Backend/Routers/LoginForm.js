const User = require('../Controllers/LoginForm')
const express = require('express')
const Router = express.Router()

Router.post('/Login',User)

module.exports=Router;

