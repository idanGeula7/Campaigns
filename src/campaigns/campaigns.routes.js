const express = require("express");
const router = express.Router();
const campaignsLogic = require("./campaigns.logic");


router.get("/", campaignsLogic.getCampaigns);

module.exports = router;