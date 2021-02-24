import { fetchTeams } from "./teams"
import { fetchFavorites } from "./teams"
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

// asychronous action creators
// call on external source
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login', {
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(credentials)
        })
            .then(resp => resp.json())
            .then(response => {
              if (response.error) {
                alert(response.error)
              } else {
                dispatch(setCurrentUser(response.data))
                dispatch(fetchFavorites(response.data))
                dispatch(resetLoginForm())    
            }
            })
            .catch(err => console.log(err))
    }
}   

export const signup = (credentials) => {
    console.log(credentials)
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/signup', {
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            method: "POST",
            body: JSON.stringify({user: credentials})
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(fetchTeams(response.data))
                    dispatch(resetSignupForm())
            }
            })
            .catch(console.log)
    }
}   

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(clearCurrentUser(response.data))
          }
        })
        .catch(err => console.log(err))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_user', {
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            method: "GET",
            body: JSON.stringify()
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    console.log(response)
                    dispatch(setCurrentUser(response.data))
                }
            })
            .catch(console.log)
    }
}

export const updateSignupForm = formData => {
  return {
      type: "UPDATE_SIGNUP_FORM",
      formData
  }

}

export const resetSignupForm = () => {
  return {
      type: "RESET_SIGNUP_FORM"
  }
}

export const updateLoginForm = (formData) => {
  return {
      type: "UPDATE_LOGIN_FORM",
      formData
  }

}

export const resetLoginForm = () => {
  return {
      type: "RESET_LOGIN_FORM"
  }
}