import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { fetchFavorites, clearFavorites } from "./favorites.js"
import { fetchTeams, clearTeams } from "./teams"

const END_POINT = 'https://game-zone-api.herokuapp.com/api/v1/'

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = (credentials, history) => {
  return dispatch => {
    return fetch(`https://game-zone-api.herokuapp.com/api/v1/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(fetchFavorites())
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch(`https://game-zone-api.herokuapp.com/api/v1/signup`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(fetchTeams())
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearFavorites())
    dispatch(clearTeams())
    return fetch(`https://game-zone-api.herokuapp.com/api/v1/logout`, {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch(`https://game-zone-api.herokuapp.com/api/v1/get_current_user`, {
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
          dispatch(setCurrentUser(response.data))
          dispatch(fetchFavorites())
        }
      })
      .catch(console.log)
  }
}