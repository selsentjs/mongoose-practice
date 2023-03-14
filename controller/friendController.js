const BestFriend = require("../models/friendModel");

// getAllFriends
const getAllFriends = async (req, res) => {
  try {
    const getFriends = await BestFriend.find({});
    res.status(200).json(getFriends);
  } catch (err) {
    res.status(500).json(err);
  }
};


// create Friends

const createFriends = async (req, res) => {
  const { bestFriend } = req.body;
  try {
    const newFriend = await BestFriend.create(req.body);
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllFriends,createFriends };
