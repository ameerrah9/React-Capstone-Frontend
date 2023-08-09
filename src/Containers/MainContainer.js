import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Actions/currentUser';
import { withRouter } from 'react-router-dom';

class MainContainer extends React.Component {

  render() {
    const { loggedIn } = this.props

    return (
        <div className='MainContainer'>

          { loggedIn ? (<Link to='/favorites'>View Your Favorites</Link>) : null}

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
