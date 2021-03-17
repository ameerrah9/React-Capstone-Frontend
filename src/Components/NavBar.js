import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Logout from './Logout'
import { Button } from '@material-ui/core';

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <Button component={Link} to='/teams' color="primary">All Teams</Button>
      
      <Button component={Link} to="/about" color="primary">About</Button>
      <Button component={Link} color="primary" to="/favorites">My Favorites</Button>

      { loggedIn ? 
      <>
        <div className="photo-canvas"><img className="profile-photo" src={currentUser.attributes.img_src} width={75} height={75}/><p id="loggedin">Logged in as {currentUser.attributes.firstname}</p></div><Logout/>
      </> : 
      null }
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