import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import currentUser from './Reducers/currentUser'
import favorites from './Reducers/favorites'
import teams from './Reducers/teams'
import favoriteForm from './Reducers/favoriteForm'
import loginForm from './Reducers/loginForm'
import signupForm from './Reducers/signupForm'
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
