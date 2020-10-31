const leagues = [
    {
        id: "eng.1",
        name: "English Premier League",
        slug: "english-premier-league",
        abbr: "Prem",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/23.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png",
        },
    },
    {
        id: "eps.1",
        name: "Spanish Primera División",
        slug: "spanish-primera-division",
        abbr: "La Liga",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/15.png",
        },
    },
    {
        id: "ita.1",
        name: "Italian Serie A",
        slug: "italian-serie-a",
        abbr: "Serie A",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/12.png",
        },
    },
    {
        id: "ger.1",
        name: "German Bundesliga",
        slug: "german-bundesliga",
        abbr: "Bund",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/10.png",
        },
    },
    {
        id: "ned.1",
        name: "Dutch Eredivisie",
        slug: "dutch-eredivisie",
        abbr: "Erediv",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/11.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/11.png",
        },
    },
    {
        id: "fra.1",
        name: "French Ligue 1",
        slug: "french-ligue-1",
        abbr: "Ligue 1",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/9.png",
        },
    },
    {
        id: "por.1",
        name: "Portuguese Liga",
        slug: "portuguese-liga",
        abbr: "Liga",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/14.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/14.png",
        },
    },
    {
        id: "rus.1",
        name: "Russian Premier League",
        slug: "russian-premier-league",
        abbr: "Prem",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/106.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/106.png",
        },
    },
    {
        id: "mex.1",
        name: "Mexican Liga BBVA MX",
        slug: "mexican-liga-bbva-mx",
        abbr: "Prim",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/22.png",
        },
    },
    {
        id: "chn.1",
        name: "Chinese Super League",
        slug: "chinese-super-league",
        abbr: "Chinese Super League",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2350.png",
            dark:
                'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2350.png"',
        },
    },
    {
        id: "bra.1",
        name: "Brazilian Serie A",
        slug: "brazilian-serie-a",
        abbr: "Bras",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/85.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/85.png",
        },
    },
    {
        id: "jpn.1",
        name: "Japanese J League",
        slug: "japanese-j1-league",
        abbr: "J Lge",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2199.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2199.png",
        },
    },
    {
        id: "mys.1",
        name: "Malaysian Super League",
        slug: "malaysian-super-league",
        abbr: "MYS",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2340.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2340.png",
        },
    },
    {
        id: "sgp.1",
        name: "Singaporean Premier League",
        slug: "singaporean-premier-league",
        abbr: "SGPL",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2338.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2338.png",
        },
    },
    {
        id: "tha.1",
        name: "Thai Premier League",
        slug: "thai-premier-league",
        abbr: "Thai Premier League",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2341.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2341.png",
        },
    },
    {
        id: "idn.1",
        name: "Indonesian Liga 1",
        slug: "indonesian-liga-1",
        abbr: "IDN",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/2336.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/2336.png",
        },
    },
    {
        id: "uga.1",
        name: "Ugandan Super League",
        slug: "ugandan-super-league",
        abbr: "USL",
        logos: {
            light:
                "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png&w=100&h=100",
            dark:
                "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo-500.png&w=100&h=100",
        },
    },
    {
        id: "arg.1",
        name: "Argentine Liga Profesional de Fútbol",
        slug: "argentine-liga-profesional-de-futbol",
        abbr: "Prim A",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png",
        },
    },
    {
        id: "tur.1",
        name: "Turkish Super Lig",
        slug: "Super",
        abbr: "turkish-super-lig",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/18.png",
            dark: "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/18.png",
        },
    },
    {
        id: "aus.1",
        name: "Australian A-League",
        slug: "australian-a-league",
        abbr: "A Lge",
        logos: {
            light: "https://a.espncdn.com/i/leaguelogos/soccer/500/1308.png",
            dark:
                "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1308.png",
        },
    },
];

const compare = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

module.exports = leagues.sort(compare);
