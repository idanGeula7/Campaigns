class Campaign {

    constructor(campaignJson) {
       
        this.id = campaignJson.id;
        this.name = campaignJson.name;
        this.thresholds = campaignJson.thresholds;
        this.data = campaignJson.data;
        
        this.acceptedRequestsCount = 0;
        this.usersCounter = new Map();

        // hashmap docs:
        // https://internet-israel.com/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99%D7%9D/es6/map-and-set/
    }

    print() {
        console.log(`${this.id}`);
    }
}

module.exports = Campaign;


// TODO:
// 1) fill in Campaign class - properties and methods.
// 2) create init func - loop through the database and create an array of campaigns.