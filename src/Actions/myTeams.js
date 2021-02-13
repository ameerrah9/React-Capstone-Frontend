// synchronous
export const setMyTeams = teams => {
    return {
        type: "SET_MY_TEAMS",
        teams
    }
}

// async

export const getMyTeams = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/teams', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"  
            },
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setMyTeams(response.data))
                }
            })
            .catch(console.log)
    }
}

const NBA_URL='https://api.sportsdata.io/v3/nba/scores/json/Standings/{2021}'
const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'
const requestHeaders = {
    credentials: "include",
    method: "POST",
    headers: {
        'Ocp-Apim-Subscription-Key': NBA_API_KEY,
        "Content-Type": "application/json"
    },
    body: JSON.stringify()
};

export const getTeams = () => {
    return dispatch => {
        return fetch(NBA_URL, requestHeaders)
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {

                }
            })
            .catch(console.log)
        }
}
