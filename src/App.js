// import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import TeamContainer from './TeamContainer';
import NavBar from './NavBar'
import { connect } from 'react-redux';

export default class App extends Component {

  // function handleOnClick() {
  //   //this.props.increaseCount();
  // };

  // handleOnClick() {
  //   this.props.dispatch({
  //     type: 'INCREASE_COUNT',
  //   });
  // }
  render() {
    return (
        <Router>
          <div className="App">
            <TeamContainer />
            <NavBar />
          </div>
        </Router>
    );
  }
}