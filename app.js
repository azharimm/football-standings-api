const express = require("express");
const app = express();

const leagueController = require("./src/controllers/leagueController");
const seasonController = require("./src/controllers/seasonController");

app.get("/", (req, res) => {
    res.json({
        status: true,
        data: "Success",
    });
});

app.get("/leagues", leagueController.leagues);
app.get("/leagues/:id", leagueController.standings);
app.get("/seasons", seasonController.seasons);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
