// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { fetchTeams } from './actions/teams'
import NavBar from './components/NavBar.js';
import TeamsContainer from './Containers/TeamsContainer'
import Favorites from './Containers/FavoritesContainer'
import Signup from './components/Users/Logout';
import About from './components/About'
import Login from './components/Users/Login';
import Home from './components/Home'
import MainContainer from './Containers/MainContainer'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
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
              <Favorites
                favorites={favorites}
              />
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
