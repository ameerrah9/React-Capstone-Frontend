import React from 'react';
import { connect } from "react-redux"
import Favorites from './FavoritesContainer'
//import {Link} from 'react-router-dom'

const MainContainer = () => {

  return (
      <div className="MainContainer">
      <h3>Favorite Teams</h3>
        <Favorites />
      </div>
  )
}

// const mapStateToProps = ({ currentUser }) => {
//   return {
//     currentUser
//   }
// }

export default MainContainer