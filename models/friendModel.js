const mongoose = require("mongoose");


const bestFriendSchema = new mongoose.Schema({
    bestFriend: {
        type:String,
    }
})

module.exports = mongoose.model("BestFriend", bestFriendSchema)