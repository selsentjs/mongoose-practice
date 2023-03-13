const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    age: {
        type:Number,
    },

}, {timestamps:true})

module.exports = mongoose.model('User', UserSchema)