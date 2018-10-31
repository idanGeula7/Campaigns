const campaignsRouter = require("./campaigns/campaigns.routes");
const express = require("express");
const config = require("./config");
const port = config.server.port;
const app = express();
let serverInstance;
app.use(express.json());

// API declaration
app.use("/birds", campaignsRouter);

serverInstance = app.listen(port, () => console.log(`Listening on port ${port}`));

// Shuts down server when app exits
process.on("SIGINT", function() {
    serverInstance.close();   
    console.log("Server got offline");
});

module.exports = {app};



