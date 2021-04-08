const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
    case "SET_FAVORITES":
        return action.favorites
    case "FETCH_FAVORITES":
        return {
          ...state,
          favorites: action.favorites
        }
    case "ADD_FAVORITE":
        return state.concat(action.favorite)
    case "DELETE_FAVORITE":
        return state.filter(favorite => favorite.id === action.favoriteId ? false : true)
    default:
        return state
    }   
}