// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './Actions/currentUser';
import { fetchTeams } from './Actions/teams';
import NavBar from './Components/NavBar';
import TeamsContainer from './Containers/TeamsContainer';
import Favorites from './Containers/FavoritesContainer';
import Signup from './Components/Users/Logout';
import About from './Components/About';
import Login from './Components/Users/Login';
import Home from './Components/Home';
import MainContainer from './Containers/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import favorites from './Reducers/favorites';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchTeams()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className='App'>
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
