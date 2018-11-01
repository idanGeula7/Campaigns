"use strict";
const campaignsRouter = require("./campaigns/campaigns.routes");
const campaignsLogic = require("./campaigns/campaigns.logic");
const express = require("express");
const config = require("./config");
const port = config.server.port;
const app = express();
app.use(express.json());


// API declaration
app.use("/birds", campaignsRouter);


// Start server
let serverInstance = app.listen(port, () => console.log(`Server is listening on port ${port}`));
campaignsLogic.init();


// Shuts server down when app exits
process.on("SIGINT", function() {
    serverInstance.close();   
    console.log("Server turned off");
});
