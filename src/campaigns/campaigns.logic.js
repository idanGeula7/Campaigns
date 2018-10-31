"use strict";
const campaignsDAL = require("./campaigns.dal");
const Campaign = require("./campain.class");
let campaignsArray = [];

let init  = () => {
    let campaignsFromDB = campaignsDAL.readAllCampaigns();
    campaignsFromDB.forEach((campaignData) => {
        campaignsArray.push(new Campaign(campaignData));
    });
    console.log("Campaigns are loaded");

    campaignsArray[0].isUserAllowed(1703);
  
};

let getCampaigns = (req, res) => {
    let acceptedCampaigns = [];

    campaignsArray.forEach((campaign) => {
        // check user threshold (isUserAllowed func)
        // check general threshold 
        // campaign.markRequest(UserId) (raises the campaign's counts)

        // if okay: acceptedCampaigns.push(campaign.id);
    });


    // return campaign IDs
};

// More useful methods



module.exports = {getCampaigns, init};