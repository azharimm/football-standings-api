require('dotenv').config()
const express = require("express");
const app = express();

const leagueController = require("./src/controllers/leagueController");
const seasonController = require("./src/controllers/seasonController");
const standingController = require("./src/controllers/standingController");
const indexController = require("./src/controllers/indexController");

app.get("/", indexController.index);
app.get("/leagues", leagueController.index);
app.get("/leagues/:id", leagueController.show);
app.get("/leagues/:id/standings", standingController.index);
app.get("/leagues/:id/seasons", seasonController.index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
