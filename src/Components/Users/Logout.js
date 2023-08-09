import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../Actions/currentUser';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <Button variant='primary' value='Log Out' type='submit'>Logout</Button>

    </form>
  )
}

export default withRouter(connect(null, { logout } )(Logout))
