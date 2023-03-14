const User = require("../models/userModel");

// getAllUsers
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find({}).populate('friend_id');
    res.status(200).json(getUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

// getUserByCity
const getUserByCity = async (req, res) => {
  try {
    const getUsers = await User.where("address.city").equals("Chennai");
    res.status(200).json(getUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

// getAge
const getAge = async (req, res) => {
  try {
    // const getUsers = await User.where('age').gt(30).lt(35).populate('bestFriend).limit(2)
    // OR
    const getUsers = await User.find({ age: { $gt: 30, $lt:35 } }).limit(3);
    res.status(200).json(getUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get user by id
const getUserById = async(req,res) => {
    const {id} = req.params;
    try{
        const singleUser = await User.findById({_id:id}).populate('bestFriend')
        res.status(200).json(singleUser)

    }
    catch(err) {
        res.status(500).json(err)
    }
}
// create user

const createUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllUsers, getUserByCity, getUserById, getAge, createUser };
