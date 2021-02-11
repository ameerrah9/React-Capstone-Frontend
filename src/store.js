import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import manageUsers from './Reducers/Users.js';
import manageTeams from './Reducers/Teams.js';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: manageUsers,
    teams: manageTeams
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
