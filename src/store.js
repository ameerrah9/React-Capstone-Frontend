import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import manageUsers from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import manageTeams from './reducers/teams.js';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: manageUsers,
    currentUser,
    loginForm,
    teams: manageTeams
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
