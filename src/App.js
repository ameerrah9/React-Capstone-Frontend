// import '../styles/App.css';
import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import Signup from './components/Signup.js';
import SearchForm from './components/SearchForm.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Logout from './components/Logout.js';
import MainContainer from './components/MainContainer'
import MyTeams from './components/MyTeams'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import { getAllTeams, updateTeam, addTeam } from './actions/myTeams';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    //this.props.getAllTeams()

  }

  render() {
    const { loggedIn, 
      // getAllTeams, updateTeam, addTeam 
    } = this.props
    return (
      <Router>
        <div className="App">
          <NavBar history={this.props.history} />
          <SearchForm />
          <MainContainer />
          <Switch>
            <Route exact path='/' render={ () => loggedIn ? <MyTeams /> : <Home /> } />
            <Route exact path='/signup' component={Signup} 
            // render={({ history }) => <Signup history={ history }/>} 

            />
            <Route exact path='/login' component={Login} />
            <Route exact path='/my-teams' component={MyTeams} />
            {/* <Route exact path ="/teams/:id" render={props => {
                const team = allTeams.find(team => team.id === props.match.params.id)
                return <TeamCard team={team} {...props}/>
              }
            }/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !! state.currentUser,
    // allTeams: state.MyTeams.allTeams
  })
}

export default connect(mapStateToProps, { getCurrentUser, 
  // getAllTeams, updateTeam, addTeam 
})(App);