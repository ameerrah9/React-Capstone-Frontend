// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    //this.props.getAllTeams()

  }

  render() {
    return (
      <Router>
        <div className="App">
        <Login />
          <NavBar />
          <MainContainer />
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !! state.currentUser,
  })
}

export default connect(mapStateToProps, { getCurrentUser, 
  // getAllTeams, updateTeam, addTeam 
})(App);