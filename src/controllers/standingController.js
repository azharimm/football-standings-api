const data = require("../data/index");

exports.index = async (req, res) => {
    try {
        const id = req.params.id;
        const sort = req.query.sort || 'asc';
        const season = req.query.season || new Date().getFullYear();
        const response = await data.get(`/${id}/standings?sort=rank:${sort}&season=${season}`);
        const { name, abbreviation, children } = response.data;

        if(children.length === 0) {
            throw new Error(`Standings data not available for this ${season} season!`);
        }

        let standings = children[0].standings.entries.map((standing) => {
            let team = standing.team;
            delete team.links;
            return {
                team: standing.team,
                note: standing.note,
                stats: standing.stats,
            };
        });
        
        return res.json({
            status: true,
            data: {
                name,
                abbreviation,
                seasonDisplay: children[0].abbreviation,
                season: children[0].standings.season,
                standings,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: `Error: ${error}`,
        });
    }
};
