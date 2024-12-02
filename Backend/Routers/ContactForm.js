const User = require('../Controllers/ContactForm')
const express = require('express')
const Router = express.Router()

Router.post('/contact',User)

module.exports=Router;

