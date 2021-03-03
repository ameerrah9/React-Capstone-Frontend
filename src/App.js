// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import { setTeams } from './actions/teams'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import TeamContainer from './components/TeamContainer'
import FavoriteContainer from './components/FavoriteContainer'
import Signup from './components/Signup.js';
import About from './components/About'
import Login from './components/Login.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import MainContainer from './components/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'

class App extends React.Component {

  componentDidMount() {
    // this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar /> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/teams' component={TeamContainer}/>
          <Route exact path='/favorites' component={FavoriteContainer}/>
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

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));