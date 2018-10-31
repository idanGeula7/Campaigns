"use strict";
const campaignsDAL = require("./campaigns.dal");

let getCampaigns = (req, res) => {
    console.log("print :)");
    res.send("okay :)");


    // return campaigns id
};

// More useful methods

let readAllCampaigns = () => {
    return campaignsDAL.readAllCampaigns();
};

module.exports = {getCampaigns, readAllCampaigns};