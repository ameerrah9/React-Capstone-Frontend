// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import { setTeams } from './actions/teams'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import TeamsContainer from './components/TeamsContainer'
import FavoritesContainer from './components/FavoritesContainer'
import Signup from './components/Signup.js';
import About from './components/About'
import Login from './components/Login.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import MainContainer from './components/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    //this.props.setTeams()

  }

  render() {
    return (
      <>
      <NavBar />
      <MainContainer />
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/teams' component={TeamsContainer}/>
          <Route exact path='/favorites' component={FavoritesContainer}/>
          <Route exact path='/about' component={About}/>
      </>
    );
  }
}

// const mapStateToProps = ({ user }) => {
//   return {
//     user
//   }
// }

export default connect(null, { getCurrentUser, setTeams
  // getAllTeams, updateTeam, addTeam 
})(App);