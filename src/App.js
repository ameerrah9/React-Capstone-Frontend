// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { fetchTeams } from './actions/teams'
import NavBar from './components/NavBar.js';
import TeamsContainer from './components/TeamsContainer'
import FavoritesContainer from './components/FavoritesContainer'
import Signup from './components/Signup.js';
import About from './components/About'
import Login from './components/Login.js';
import Home from './components/Home.js';
import MainContainer from './components/MainContainer'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import favorites from './reducers/favorites';
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchTeams()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar /> : <Home/> }
         <Switch>
          <Route exact path='/' component={MainContainer}/>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/teams' component={TeamsContainer}/>
          <Route exact path='/favorites' render={() => 
              <FavoritesContainer favorites={favorites}/>
           } />
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    teams: state.teams,
    favorites: state.favorites
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, fetchTeams })(App));