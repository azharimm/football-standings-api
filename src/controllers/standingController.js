const data = require("../data/index");

exports.index = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await data.get(`/${id}/standings`);
        const { name, abbreviation, children } = response.data;
        let results = {
            name,
            abbreviation,
            seasonDisplay: children[0].abbreviation,
            season: children[0].standings.season,
            standings: children[0].standings.entries,
        };
        return res.json({
            status: true,
            data: results,
        });
    } catch (error) {
        return res.json({
            status: false,
            data: `Error: ${error}`,
        });
    }
};