require('dotenv').config()
const express = require("express");
const app = express();

const leagueController = require("./src/controllers/leagueController");
const seasonController = require("./src/controllers/seasonController");
const standingController = require("./src/controllers/standingController");
const indexController = require("./src/controllers/indexController");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.get("/", indexController.index);
app.get("/leagues", leagueController.index);
app.get("/leagues/:id", leagueController.show);
app.get("/leagues/:id/standings", standingController.index);
app.get("/leagues/:id/seasons", seasonController.index);
app.get("/*", (req, res) => {
    return res.status(404).json({
        status: false,
        message: 'Not found!'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
