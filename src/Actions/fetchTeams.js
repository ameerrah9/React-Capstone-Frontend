export default function fetchTeams() {
    const NBA_URL='https://api.sportsdata.io/v3/nba/scores/json/Standings/{2021}'
    const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'
    const requestHeaders = {
        headers: {
          'Ocp-Apim-Subscription-Key': NBA_API_KEY,
        },
    };

    return (dispatch) => {
        fetch(NBA_URL, requestHeaders)
            .then(resp => resp.json())
            .then(teams => dispatch({
                type: 'FETCH_TEAMS',
                payload: teams
            }))
    }
}