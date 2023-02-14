const express = require("express");
const model = require("../model/model");

const router = express.Router();

const { user, userData, getUser, getAllUser, deleteUser } = require("../controller/controller");
const userValidator = require("../middleware/middleware");

router.get("/getUsers", getUser);

router.get('/getUserAge',getAllUser)

router.post("/", userValidator, user);

router.post("/profile", userData);

router.delete('/deleteUser',deleteUser)

module.exports = router;
