import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import currentUser from './reducers/currentUser.js';
import manageUsers from './reducers/users'
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import searchForm from './reducers/searchForm.js';
import searchTeams from './reducers/searchTeams';
import myTeams from "./reducers/myTeams"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: manageUsers,
    currentUser,
    loginForm,
    myTeams,
    signupForm,
    searchTeams,
    searchForm
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
