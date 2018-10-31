"use strict";
class Campaign {

    constructor(campaignJson) {
       
        this.id = campaignJson.id;
        this.name = campaignJson.name;
        this.thresholds = campaignJson.thresholds;
        this.data = campaignJson.data;
        
        this.acceptedRequestsCount = 0;
        this.usersCounter = new Map(); // userId -> count

        // hashmap docs:
        // https://internet-israel.com/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99%D7%9D/es6/map-and-set/
    }

    isUserAllowed(userId) { // Is the user allowed receiving this campaign

        if(this.usersCounter.has(userId) == false) {
            return true; 
        }

        // The user does exist in the hashmap
        if(this.thresholds.hasOwnProperty("max_per_user")) {
            return (this.usersCounter.get(userId) < this.thresholds.max_per_user);
        } else {
            return true;
        }

    }


}

module.exports = Campaign;


// TODO:
// 0) isUserAllowed - check this function.
// 1) fill in Campaign class - properties and methods.
// 2) create init func - loop through the database and create an array of campaigns.