import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Users/Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/teams" >All Teams</NavLink>
      <NavLink exact activeClassName="active" to="/about" >About</NavLink>
      <NavLink exact activeClassName="active" to="/favorites">My Favorites</NavLink>
      { loggedIn ? 
      <>
        <div><img className="profile-photo" src={currentUser.attributes.img_src} width={50} height={50}/><p id="loggedin">Logged in as {currentUser.attributes.firstname}</p></div><Logout/>
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