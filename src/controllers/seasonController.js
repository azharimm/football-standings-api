const data = require("../data/index");

exports.index = async (req, res) => {
    try {
        const id = req.params.id;
        const sort = req.query.sort || 'asc';
        const season = req.query.season || new Date().getFullYear();
        const response = await data.get(`/${id}/standings?sort=rank:${sort}&season=${season}`);
        const { name, abbreviation, seasons } = response.data;
        
        return res.json({
            status: true,
            data: {
                name,
                desc: 'Available seasons standings data',
                abbreviation,
                seasons,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: `Error: ${error}`,
        });
    }
};
