import React from 'react';
import Logout from './Logout.js';
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Login from './Login.js';

const NavBar = ({ users }) => {

  return ( 
    <div className="NavBar">
      { users ? 
      <div><img className="profile-photo" src={users.attributes.img_src} width={75} height={75}/><p>Welcome, {users.attributes.firstname}</p></div> : 
      "" }
      { users !== null ? <Logout /> : <Login /> }
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(NavBar)