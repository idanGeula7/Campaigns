"use strict";
const campaignsRouter = require("./campaigns/campaigns.routes");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/campaigns", campaignsRouter);

module.exports = app;

/*
 TODO:

 * A short description of where your system might fail (Heavy load; Bad database connections; ease of adding new features; stupid users; etc.)
  
 * Instructions on how to build, install and run it; plus some usage examples
 and how to test (npm test)


http://localhost:3000/campaigns?user_id=2786
http://localhost:3000/campaigns?user_id=2786
http://localhost:3000/campaigns?user_id=2786
http://localhost:3000/campaigns?user_id=2786
http://localhost:3000/campaigns?user_id=1337

goota add a README.txt file like in blox's project.

*/