const mongoose = require('mongoose')
const schema = mongoose.Schema

let UserSchema = new schema({
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    gender:{
        type:String,
    },
    phone:{
        type:Number,
    },
    dob:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    street:{
        type:String,
    },
    city:{
        type:String,
    },
    zip:{
        type:String,
    },
    highschool:{
        type:String,
    },
    university:{
        type:String,
    },
    experience1:{
        type:String,
    },
    experience2:{
        type:String,
    },
})

module.exports = mongoose.model('EducareLogin',UserSchema)