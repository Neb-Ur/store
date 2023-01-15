"use strict";
const express = require("express");
const controller = require("../controller/usuarioController");
const router = express.Router();

router.get("/", controller.home);

router.post("/", controller.test);
router.post("/save", controller.saveUser);
//routing

module.exports = router;
