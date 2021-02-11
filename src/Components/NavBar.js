import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/teams' style={{paddingRight: '10px'}}>Teams  </Link>
      <Link to='/login' style={{paddingRight: '10px'}}>Login  </Link>
      <Link to='/signup' style={{paddingRight: '10px'}}>Signup  </Link>
      <Link to='/about' style={{paddingRight: '10px'}}>About  </Link>
      <Link to='/home' style={{paddingRight: '10px'}}>Home  </Link>
    </div>

  )
}

export default NavBar