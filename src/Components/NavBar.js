import React from 'react';
import Logout from './Logout.js';
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Login from './Login.js';

const NavBar = ( { currentUser, loggedIn }) => {

  return (  
      <div className="NavBar">
        <NavLink activeClassName to='/teams'>All Teams</NavLink>
        <NavLink activeClassName to='/favorites'>Favorites</NavLink>
        <NavLink activeClassName to='/about'>About</NavLink>
        <NavLink activeClassName to='/home'>Home</NavLink>

        <Logout />
      </div>
  )
}

export default NavBar