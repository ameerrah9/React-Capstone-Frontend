import React from 'react';
import Favorites from './FavoritesContainer'
import Teams from './TeamsContainer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

class MainContainer extends React.Component {

  render() {
    const { loggedIn } = this.props

    return (
        <div className="MainContainer">

          { loggedIn ? (<Link to="/favorites">View Your Favorites</Link>) : null}

        </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(MainContainer));