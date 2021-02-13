// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import MainContainer from './components/MainContainer'
import MyTeams from './components/MyTeams'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' render={ () => loggedIn ? <MyTeams /> : <Home /> } />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/my-teams' component={MyTeams} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !! state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);