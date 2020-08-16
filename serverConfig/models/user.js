const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    password:String
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}