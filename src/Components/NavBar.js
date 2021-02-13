import React from 'react';
import Login from "./Login"
import Logout from './Logout.js';
//import TeamsContainer from './containers/TeamsContainer'
import { connect } from "react-redux"
//import {Link} from 'react-router-dom'

const NavBar = ( { currentUser }) => {

  return (
      <div className="NavBar">
        { currentUser ? <div>
        <strong>Welcome, {currentUser.attributes.firstname} </strong>
        <img src={currentUser.attributes.img_src} />
        </div> : "" } 
        <button>Login</button>
        <button>Signup</button>
        { currentUser ? <Logout /> : <Login /> } 
      </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)