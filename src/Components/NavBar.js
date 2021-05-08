import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Users/Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div>

      <div className="NavBar">
        <ul>
          <li><NavLink exact activeClassName="active" to="/teams" >All Teams</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/about" >About</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/favorites">My Favorites</NavLink></li>
          { loggedIn ? 
              <>
              <li id="loggedin">Logged in as {currentUser.attributes.firstname}</li><Logout/>
              </> : 
              null }
        </ul>
      </div>
      { loggedIn ?<img className="profile-photo" src={currentUser.attributes.img_src} width={50} height={50}/>
      : null }
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