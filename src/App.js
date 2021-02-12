// import './App.css';
import React, { Component } from 'react';
import Login from "./components/Login.js"
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
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);