const leagues = require("../data/leagues");

exports.index = async (req, res) => {
    return res.json({
        status: true,
        data: leagues,
    });
};

exports.show = async (req, res) => {
    const id = req.params.id;
    const league = leagues.find(league => league.id === id);

    if(!league) {
        return res.status(404).json({
            status: false,
            data: `Error: league not found`,
        });
    }
    return res.json({
        status: true,
        data: league,
    });
};
