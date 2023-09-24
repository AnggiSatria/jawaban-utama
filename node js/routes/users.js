const express = require("express");

const router = express.Router();

const UserController = require("../controller/user");

router.get("/", UserController.getAllUsers);

router.post("/", UserController.postUsers);

module.exports = router;
