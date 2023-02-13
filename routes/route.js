const express = require("express");
const model = require("../model/model");

const router = express.Router();

const { user, userData, userAge } = require("../controller/controller");
const userValidator = require("../middleware/middleware");

router.get("/getUsers", userAge);

router.post("/", userValidator, user);

router.post("/profile", userData);

module.exports = router;
