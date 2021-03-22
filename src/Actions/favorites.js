import { resetFavoriteForm } from './favoriteForm'

const END_POINT = 'https://git.heroku.com/game-zone-api.git'

export const setFavorites = favorites => {
    return {
        type: "SET_FAVORITES",
        favorites
    } 
}

export const clearFavorites = () => {
    return {
      type: "CLEAR_FAVORITES"
    }
  }
  
  export const addFavorite = favorite => {
    return {
      type: "ADD_FAVORITE",
      favorite
    }
  }
  
  export const deleteFavoriteSuccess = favoriteId => {
    return {
      type: "DELETE_FAVORITE",
      favoriteId
    }
  }

export const fetchFavorites = () => {
    return dispatch => {
          return fetch(`${END_POINT}favorites`, {
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
          dispatch(setFavorites(response.data))
        }
      })
      .catch(console.log)
  }
}

// export const createFavorite = (team_id, history) => {

export const createFavorite = (team_id, user_id) => {
  // console.log("hello")
  return dispatch => {
      return fetch("${END_POINT}favorites", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: parseInt(user_id),
          team_id: parseInt(team_id)
        })
      })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addFavorite(response.data))
          dispatch(fetchFavorites())
        }
      })
      .catch(console.log)
  }
  }

export const deleteFavorite = (favoriteId) => {
    return dispatch => {
      return fetch(`${END_POINT}favorites/${favoriteId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteFavoriteSuccess(favoriteId))
          }
        })
        .catch(console.log)
  
    }
  
  }

export default fetchFavorites