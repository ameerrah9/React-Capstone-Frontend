// import './App.css';
import React from 'react';
import Login from "./components/Login.js"
import Logout from './components/Logout.js';
import TeamsContainer from './containers/TeamsContainer'
import { connect } from "react-redux"
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <h2>{ this.props.currentUser ? <Logout /> : <Login /> }</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);