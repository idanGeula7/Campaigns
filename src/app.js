"use strict";
const campaignsRouter = require("./campaigns/campaigns.routes");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/campaigns", campaignsRouter);

module.exports = app;