import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import currentUser from './reducers/currentUser'
import favorites from './reducers/favorites'
import teams from './reducers/teams'
import favoriteForm from './reducers/favoriteForm'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    currentUser,
    loginForm,
    favorites,
    signupForm,
    favoriteForm,
    teams
  })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
