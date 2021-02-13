import React from 'react';
import MyTeams from './MyTeams'
import { connect } from "react-redux"
//import {Link} from 'react-router-dom'

const MainContainer = ( { currentUser }) => {

  return (
      <div className="MainContainer">
        <MyTeams />
      </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)