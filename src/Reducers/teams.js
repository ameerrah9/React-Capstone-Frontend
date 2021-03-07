const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
      case "SET_TEAMS":
          return action.teams
      case "FETCH_TEAMS":
        return {
            ...state,
            teams: action.teams
          }
          return
      case "SEARCH_TEAMS":
          return 
      default:
        return state
  }
}