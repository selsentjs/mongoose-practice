const express = require("express");

const router = express.Router();
const {
  getAllUsers,
  getUserByCity,
  getUserById,
  getAge,
  createUser,
} = require("../controller/userController");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);

router.route("/city").get(getUserByCity);
router.route("/age").get(getAge);
router.route("/").post(createUser);
module.exports = router;
