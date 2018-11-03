const test = require("ava");
const Campaign = require("../campaigns/campain.class");

const campaignData = {
    id: 100, 
    name: "Test campaign", 
    thresholds: { 
        max_total: 2, 
        max_per_user: 6
    },
    data: {} 
};

test("Validate that campaign is available for future requests", async test => {
    let campaign = new Campaign(campaignData);    
    test.is(campaign.isCampaignAllowed(), true);
});

test("Validate that campaign is unavailable for future requests", async test => {
    let campaign = new Campaign(campaignData); 
    campaign.raiseCampaignCounters(22);
    campaign.raiseCampaignCounters(22);
    test.is(campaign.isCampaignAllowed(), false);
});



