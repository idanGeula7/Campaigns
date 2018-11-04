"use strict";
const express = require("express");
const check = require("express-validator/check").check;
const router = express.Router();
const campaignsLogic = require("./campaigns.logic");

//router.get("/", campaignsLogic.printCampaignsStatus); // For debugging only
router.get("/", [check("user_id").isInt({gt: 0})], campaignsLogic.getCampaigns);

module.exports = router;