import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/users'
import { Form, Button, InputGroup } from 'react-bootstrap'

const Logout = ({ logout }) => {

    return (
      <Form inline onSubmit={logout}>
        <input type="submit" value="Logout" />
      </Form>
  );
}

export default connect(null, { logout } )(Logout)