export default (state = null, action) => {
  switch(action.type) {
      case "SET_TEAMS":
          return action.teams
      case "FETCH_TEAMS":
          return
      case "SEARCH_TEAMS":
          return 
      case "SET_FAVORITES":
        return action.favorites
      case "FETCH_FAVORITES":
        return
      case "ADD_FAVORITE":
        return state.concat(action.favorite)
      case "REMOVE_FAVORITE":
        return state.filter(favorite => favorite.id === action.favoriteId ? false : true)
      default:
        return state
  }
}