import { resetFavoriteForm } from './favoriteForm'


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
          return fetch(`http://localhost:3001/api/v1/favorites`, {
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


export const createFavorite = (favoriteData, history) => {
    return dispatch => {
      const sendableFavoriteData = {
        team_id: favoriteData.team_id,
        user_id: favoriteData.userId
      }

      return fetch(`http://localhost:3001/api/v1/favorites`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableFavoriteData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addFavorite(resp.data))
            dispatch(resetFavoriteForm())
            history.push(`/favorites/${resp.data.id}`)
            // go somewhere else --> trip show?
            // add the new trip to the store
          }
        })
        .catch(console.log)
  
    }
  }

export const deleteFavorite = (favoriteId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/favorites/${favoriteId}`, {
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
            history.push(`/favorites`)
          }
        })
        .catch(console.log)
  
    }
  
  }