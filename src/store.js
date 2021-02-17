import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import users from './reducers/users'
import teams from "./reducers/teams"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    teams,
    users
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) )

export default store
