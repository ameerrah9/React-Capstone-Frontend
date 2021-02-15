const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'

export const searchTeams = data => {
  return {
    type: "SEARCH_TEAMS",
    data
  }
}


export const fetchTeamsFromSearch = teams => {
    return dispatch => {
        return fetch(`https://api.sportsdata.io/v3/nba/stats/json/Players/${teams}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              'Ocp-Apim-Subscription-Key': NBA_API_KEY
          }
        })
        .then(resp => console.log(resp))
        .then(res => {
          console.log(res)
            //dispatch(searchApiGames(data))
        })
        .catch(err => console.log(err));
    }
}