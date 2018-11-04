"use strict";
class Campaign {

    constructor(campaignJson) {
        this.id = campaignJson.id;
        this.name = campaignJson.name;
        this.thresholds = campaignJson.thresholds;
        this.data = campaignJson.data;
        this.acceptedRequestsCount = 0;
        this.usersCounter = new Map(); // key: userId -> value: accepted requests count
    }

    // Is the user allowed receiving this campaign (according to his threshold)
    isUserAllowed(userId) { 

        // Checks whether it's the first time this user request this campaign
        if(this.usersCounter.has(userId) == false) {
            // We assume there is no campaign with "max_per_user: 0", because we have already validated that in "campaigns.dal.js"
            return true; 
        }

        // The user does exist in the hashmap, so we'll check whether he
        // have reached it's threshold
        if(this.thresholds.hasOwnProperty("max_per_user")) {
            return (this.usersCounter.get(userId) < this.thresholds.max_per_user);
        } else {
            return true;
        }
    }

    // Checks general threshold 
    isCampaignAllowed() { 
        if(this.thresholds.hasOwnProperty("max_total")) {
            return (this.acceptedRequestsCount < this.thresholds.max_total);
        } else {
            return true;
        }
    }

    raiseCampaignCounters(userId) {
        if(this.usersCounter.has(userId) == false) {
            this.usersCounter.set(userId, 1);
        } else {
            this.usersCounter.set(userId, this.usersCounter.get(userId) + 1);
        }
        
        this.acceptedRequestsCount++;
    }
}

module.exports = Campaign;
