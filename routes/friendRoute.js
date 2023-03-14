const express = require("express");

const router = express.Router();
const { getAllFriends,createFriends } = require("../controller/friendController");

router.route("/").get(getAllFriends);

router.route("/").post(createFriends);


module.exports = router;
