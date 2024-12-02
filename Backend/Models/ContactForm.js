const mongoose = require('mongoose')
const schema = mongoose.Schema

let UserSchema = new schema({
    Fname:{
        type:String,
    },
    Lname:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Email:{
        type:String,
    },
    Country:{
        type:String,
    },
    Msg:{
        type:String,
    },
    
})

module.exports = mongoose.model('ContactForm',UserSchema)