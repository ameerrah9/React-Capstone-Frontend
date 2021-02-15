const NBA_URL='https://api.sportsdata.io/v3/nba/scores/json/Standings/{2021}'
const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'

const requestHeaders = {
  method: "GET",
    headers: {
        'Ocp-Apim-Subscription-Key': NBA_API_KEY,
        "Content-Type": "application/json"  
    },
};

export const fetchApiTeams = teams => {
  return {
    type: "FETCH_API_TEAMS",
    teams
  }
}

export const fetchTeams = teams => {
    return dispatch => {
        return fetch(NBA_URL, {
          method: "GET",
            headers: {
                'Ocp-Apim-Subscription-Key': NBA_API_KEY,
                "Content-Type": "application/json"  
            },
        })
          .then(resp => resp.json())
          .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
              dispatch(fetchApiTeams(response.data))
            }
          })
          .catch(err => console.log(err));
}}