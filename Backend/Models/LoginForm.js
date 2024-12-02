const mongoose = require('mongoose')
const schema = mongoose.Schema

let UserSchema = new schema({
    Email:{
        type:String,
    },
    Password:{
        type:String,
    },
})

module.exports = mongoose.model('EducareLogin',UserSchema)
