"use strict"; 
const campaignsCollection = require("../database/campaignsCollection");

let readAllCampaigns = () => {
    return campaignsCollection;
};

module.exports = {readAllCampaigns};