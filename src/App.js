// import '../styles/App.css';
import React from 'react';
import { connect } from "react-redux"
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);