"use strict"; 
const Joi = require("joi");
const campaignsCollection = require("../database/campaigns.collection");
const campaignSchema = require("./campaigns.schema");

// Reads all campaigns from the database 
// and returns only the proper ones
let readAllCampaigns = () => {
    const validatedCampaigns = [];
    let campaignValidationResult;
    campaignsCollection.forEach((campaign) => {
        campaignValidationResult = Joi.validate(campaign, campaignSchema);

        if (campaignValidationResult.error) {
            console.log(`Campaign id ${campaign.id} haven't been loaded from database due to validation mismatch: ${campaignValidationResult.error.message}`);
        } else {
            validatedCampaigns.push(campaign);
        }
    });

    return validatedCampaigns;
};

module.exports = {readAllCampaigns};