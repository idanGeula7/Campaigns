const test = require("ava");
const request = require("supertest");
const app = require("../app");
const campaignsLogic = require("../campaigns/campaigns.logic");
campaignsLogic.init();

test("Check bad request: user_id is a text", async test => {
    const response = await request(app)
        .get("/campaigns?user_id=bbb");
    test.is(response.status, 400);
    test.deepEqual(response.body, "The server cannot not process the request due to an apparent client error: user_id must be an Integer greater than 0");
});

test("Check bad request: user_id is a negative number", async test => {
    const response = await request(app)
        .get("/campaigns?user_id=-8");
    test.is(response.status, 400);
    test.deepEqual(response.body, "The server cannot not process the request due to an apparent client error: user_id must be an Integer greater than 0");
});

test("Check response for user_id 2786", async test => {
    const response = await request(app)
        .get("/campaigns?user_id=2786");
    test.is(response.status, 200);
    test.deepEqual(response.body, [
        101,
        102,
        103
    ]); 
});

