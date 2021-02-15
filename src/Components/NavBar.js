import React from 'react';
import Logout from './Logout.js';
import ApiTeams from './ApiTeams'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'

const NavBar = ( { currentUser, loggedIn }) => {

  return (
      <div className="NavBar">
        <NavLink activeClassName to='/teams'>All Teams</NavLink>
        <NavLink activeClassName to='/my-teams'>My Teams</NavLink>
        <NavLink activeClassName to='/about'>About</NavLink>
        { loggedIn ? <Logout /> : null } 
      </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)