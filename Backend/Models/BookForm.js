const mongoose = require('mongoose')
const schema = mongoose.Schema

let UserSchema = new schema({
    Name:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Email:{
        type:String,
    },
    Services:{
        type:String,
    }
})

module.exports = mongoose.model('EducareBook',UserSchema)