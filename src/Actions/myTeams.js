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
