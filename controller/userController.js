const User = require('../models/userModel');

// getAllUsers
const getAllUsers = async(req,res) => {
    
    try{
        const getUsers = await User.find();
        res.status(200).json(getUsers)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// create user

const createUser = async(req,res) => {
    const {name,age} = req.body;
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {getAllUsers,createUser}