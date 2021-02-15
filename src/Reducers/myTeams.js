const initialState = {
  allTeams: [],
  searchResults: [],
}

export default function manageTeams(state = initialState, action){
  switch(action.type) {
      case "SET_ALL_TEAMS":
          return {
              ...state,
          teams: action.allTeams
          }
      // case "ADD_TEAM":
      //     return {
      //         ...state,
      //     }
      // case "UPDATE_TEAM":
      //     return {
      //         ...state, 
      //         allTeams: state.allTeams.map(team => {
      //             if (action.team.id === team.id) {
      //                 return action.team
      //             }
      //             return team
      //         })
      //     }
      case "FETCH_TEAM":
          return {
              ...state,
              team: action.team
          }
      case "SEARCH_ALL_TEAMS":
          return {
              ...state,
              searchResults: action.searchResults,
              userResults: []
          }
      default:
          return state
  }
}


// synchronus action creators
export const setTeams = allTeams => {
  return {
      type: "SET_TEAMS",
      allTeams
  }
}

export const clearTeams = () => {
  return {
      type: "CLEAR_TEAMS"
  }
}

export const addTeam = team => {
  return {
      type: "ADD_TEAM",
      team
  }
}

export const setUpdateTeam= team => {
  return {
      type: "UPDATE_TEAM",
      team
  }
}

export const fetchTeam = team => {
  return {
      type: "FETCH_TEAM",
      team
  }
}

export const getTeamSearchResults = (search, allTeams) => {
  return {
      type: "SEARCH_TEAM",
      searchResults: allTeams.filter(team => {
          return (
              team.attributes.name.toLowerCase() === search.toLowerCase() ||
              team.attributes.name.toLowerCase().startsWith(search) ||
              team.attributes.name.toLowerCase().includes(search)
          )
      })
  }
}