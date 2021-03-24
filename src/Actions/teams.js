import teams from "../reducers/teams"

const END_POINT = 'https://localhost3001/api/v1/'

export const setTeams = teams => {
    return {
        type: "SET_TEAMS",
        teams
    } 
}

export const clearTeams = () => {
  return {
    type: "CLEAR_TEAMS"
  }
}

export const fetchTeams = () => {
    return dispatch => {
        return fetch(`https://localhost3001/api/v1/teams`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"  
            },
            })
            .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setTeams(response.data))
        }
      })
      .catch(console.log)
  }
}

// export const fetchTeamsFromSearch = (query) => {
//     return dispatch => {
//         return fetch('https://localhost3001/api/v1/teams', {
//             credentials: "include",
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"  
//             },
//         })
//             .then(resp => resp.json())
//             .then(response => {
//                 if (response.error) {
//                     alert(response.error)
//                 } else {
//                     dispatch(searchTeams(response.data))
//                 }
//             })
//             .catch(console.log)
//     }
// }

// export const searchTeams = () => {
//     return {
//         type: "SEARCH_TEAMS",
//         teams
//       }
// }

export default fetchTeams