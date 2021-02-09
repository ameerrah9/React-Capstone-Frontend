import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Team from './TeamContainer';
import NavBar from './NavBar'
import { connect } from 'react-redux';

const App = () => {

  handleOnClick = event => {
    this.props.increaseCount();
  };

  return (
      <Router>
        <div className="App">
          <button onClick={this.handleOnClick}>Add Team To Favorites</button>
          <p>{this.props.teams.length}</p>

          <Team />
          <NavBar />
        </div>
      </Router>
  );
};

export default App;

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);