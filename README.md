# Football Standings API

## 1. All Leagues Available
```[ENDPOINT] /leagues```
```url
[GET] https://api-football.azharimm.tk/leagues
```

#### Sample Response
```json
{
  "status": true,
  "data": [
    {
      "id": "arg.1",
      "name": "Argentine Liga Profesional de Fútbol",
      "slug": "argentine-liga-profesional-de-futbol",
      "abbr": "Prim A",
      "logos": {
        "light": "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
        "dark": "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png"
      }
    },
    ...
  ]
}
```

## 2. League Detail
```[ENDPOINT] /leagues/{id}```
```url
[GET] https://api-football.azharimm.tk/leagues/eng.1
```

#### Sample Response
```json
{
  "status": true,
  "data": {
      "id": "arg.1",
      "name": "Argentine Liga Profesional de Fútbol",
      "slug": "argentine-liga-profesional-de-futbol",
      "abbr": "Prim A",
      "logos": {
        "light": "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png",
        "dark": "https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png"
      }
    },
}
```

## 3. Seasons Available
```[ENDPOINT] /leagues/{id}/seasons```
```url
[GET] https://api-football.azharimm.tk/leagues/eng.1/seasons
```

#### Sample Response
```json
{
  "status": true,
  "data": {
      "name": "English Premier League",
      "desc": "Available seasons standings data",
      "abbreviation": "Prem",
      "seasons": []
    },
}
```

## 4. Standings
```[ENDPOINT] /leagues/{id}/standings```
```url
[GET] http://api-football.azharimm.tk/leagues/eng.1/standings?season=2020&sort=asc
```

#### Sample Response
```json
{
  "status": true,
  "data": {
      "name": "English Premier League",
      "abbreviation": "Prem",
      "seasonDisplay": "2020-2021",
      "season": 2020,
      "standings": []
   },
}
```
