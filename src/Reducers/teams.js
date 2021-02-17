const initialState = {
  teams: [],
  favorites: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
      case "SET_TEAMS":
          return action.teams
      case "FETCH_TEAMS":
          return
      case "SEARCH_TEAMS":
          return 
      case "FETCH_FAVORITES":
        return action.favorites
      case "ADD_FAVORITE":
        return state.concat(action.favorite)
      case "REMOVE_FAVORITE":
        return state.filter(favorite => favorite.id === action.favoriteId ? false : true)
      default:
        return state
  }
}