exports.index = (req, res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.json({
        status: true,
        data: {
            maintainer: 'Azhari Muhammad M <azhari.marzan@gmail.com>',
            source: 'https://github.com/azharimm/football-standings-api',
            leagues: {
                endpoint: '/leagues',
                example: fullUrl+'leagues'
            },
            leagues_detail: {
                endpoint: '/leagues/{id}',
                example: fullUrl+'leagues/eng.1'
            },
            standings: {
                endpoint: '/leagues/{id}/standings',
                example: fullUrl+'leagues/eng.1/standings?season=2020&sort=asc'
            },
            seasons: {
                endpoint: '/leagues/{id}/seasons',
                example: fullUrl+'leagues/eng.1/seasons'
            }
        }
    });
}