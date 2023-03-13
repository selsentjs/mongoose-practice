const mongoose = require('mongoose');
const validator = require('validator')
const addressSchema = new mongoose.Schema({
    city: {
        type:String,
    },
    street: {
        type:String,
    }
})
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    age: {
        type:Number,
        min: 10,
        max: 60,
       validate: {
        validator: v=>v % 2 == 0,// age should be even number
        message: props => `${props.value} is not a correct number`
       }
    },
    email: {
        type:String,
        required:true,
        lowercase:true, // email lowercase aha mari vidum
        validate: {
            validator:validator.isEmail,
            message:'Please provide valid email'
        }
    },
    
    hobbies: ['Sports','Music'],
    address: addressSchema,
 }, {timestamps:true})

module.exports = mongoose.model('User', UserSchema)