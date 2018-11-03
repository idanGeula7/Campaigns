let app = require("./app");
const campaignsLogic = require("./campaigns/campaigns.logic");
const config = require("./config");
const port = config.server.port;

campaignsLogic.init();

// Starts server
let serverInstance = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Shuts server down when app exits
process.on("SIGINT", function() {
    serverInstance.close();   
    console.log("Server turned off");
});