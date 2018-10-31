"use strict";
const campaignsRouter = require("./campaigns/campaigns.routes");
const campaignsLogic = require("./campaigns/campaigns.logic");
const express = require("express");
const config = require("./config");
const port = config.server.port;
const app = express();
let serverInstance;
app.use(express.json());
const Campaign = require("./campaigns/campain.class");

// API declaration
app.use("/birds", campaignsRouter);


let init  = () => {
    let campaigns = [];
    let campaignsFromDB = campaignsLogic.readAllCampaigns();
    campaignsFromDB.forEach((campaignData) => {
        campaigns.push(new Campaign(campaignData));
    });
    console.log("okay");
    console.log(campaigns);
  
};

/////////////////////////////
  



////////////////////

init();
//serverInstance = app.listen(port, () => console.log(`Server is listening on port ${port}`));

// Shuts server down when app exits
process.on("SIGINT", function() {
    serverInstance.close();   
    console.log("Server turned off");
});




module.exports = {app};



