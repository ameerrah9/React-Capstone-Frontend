import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import manageUsers from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import manageTeams from './reducers/teams.js';
import myTeams from "./reducers/myTeams"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: manageUsers,
    currentUser,
    loginForm,
    myTeams,
    signupForm,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
