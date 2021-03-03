import teams from "../reducers/teams"

export const setTeams = teams => {
    return {
        type: "SET_TEAMS",
        teams
    } 
}

export const fetchTeams = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/teams', {
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
                    dispatch(setTeams(response.data))
                }
            })
            .catch(console.log)
    }
}
// export const fetchTeamsFromSearch = (query) => {
//     return dispatch => {
//         return fetch('http://localhost:3001/api/v1/teams', {
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

// export const fetchFavorites = userID => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/users/${userID}/favorites`, {
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
//                     dispatch(setFavorites(response.data))
//                 }
//             })
//             .catch(console.log)
//     }
// }

// export const setFavorites = favorites => {
//     return {
//         type: "FETCH_FAVORITES",
//         favorvites
//     }
// }

// export const addFavorite = (team, userID) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/users/${userID}/favorites`, {
//             credentials: "include",
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"  
//             },
//             body: JSON.stringify(team)
//         })
//             .then(resp => resp.json())
//             .then(response => {
//                 if (response.error) {
//                     alert(response.error)
//                 } else {
//                     dispatch(setFavorites(response.data))
//                 }
//             })
//             .catch(console.log)
//     }
// }

// export const removeFavorite = (team, userID) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/v1/users/${userID}/favorites/${favoritesID}`, {
//             credentials: "include",
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"  
//             },
//         })
//             .then(resp => resp.json())
//             .then(response => {
//                 if (response.error) {
//                     alert(response.error)
//                 } else {
//                     dispatch(removeFavoriteSuccess(response.data))
//                 }
//             })
//             .catch(console.log)
//     }
// }

// export const removeFavoriteSuccess = favoriteID => {
//     return {
//       type: "REMOVE_FAVORITE",
//       favoriteID
//     }
// }