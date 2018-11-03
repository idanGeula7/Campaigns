"use strict";
const campaignsDAL = require("./campaigns.dal");
const Campaign = require("./campain.class");
const validationResult = require("express-validator/check").validationResult;
let campaignsArray = [];

let init  = () => {
    let campaignsFromDB = campaignsDAL.readAllCampaigns();
    campaignsFromDB.forEach((campaignData) => {
        campaignsArray.push(new Campaign(campaignData));
    });
    console.log("Campaigns had been loaded");  
};

// For debug only:
let printCampaignsStatus = (req, res, next) => {
    console.log("---------------------------------------------------------");
    campaignsArray.forEach((campaign) => {
        console.log(`Campaign ${campaign.id} - ${campaign.name}`);
        console.log(`acceptedRequestsCount: ${campaign.acceptedRequestsCount}`);

        if(campaign.thresholds.hasOwnProperty("max_total")) {
            console.log(`max_total: ${campaign.thresholds.max_total}`);
        }

        if(campaign.thresholds.hasOwnProperty("max_per_user")) {
            console.log(`max_per_user: ${campaign.thresholds.max_per_user}`);
        }

        console.log("Hashmap:");
        for (let entry of campaign.usersCounter.entries()) {
            console.log(`${entry[0]}: ${entry[1]}`);
        }
        console.log("-------------------");
    });
    next();
};

let getCampaigns = (req, res) => {

    let userId = req.query.user_id; 

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json("The server cannot not process the request due to an apparent client error: user_id must be an Integer greater than 0");
    }

    let acceptedCampaigns = [];
    campaignsArray.forEach((campaign) => {

        // Checks user threshold 
        if(campaign.isUserAllowed(userId)) {

            // Checks general threshold 
            if(campaign.isCampaignAllowed()) {
                campaign.raiseCampaignCounters(userId);
                acceptedCampaigns.push(campaign.id);
            }
        }      
    });

    res.json(acceptedCampaigns);
};

module.exports = {getCampaigns, init, printCampaignsStatus};