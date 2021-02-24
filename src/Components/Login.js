import React from 'react';
import { connect } from 'react-redux'
import { login, updateLoginForm } from '../actions/users'
import { Form, Button, InputGroup } from 'react-bootstrap'

class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    updateLoginForm(this.state)
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <div>
          <input 
            type="text" 
            value={this.state.username}
            placeholder="username"
            name="username"
            onChange={this.handleInputChange} />
        </div>
        <div>
        <input 
            type="password" 
            value={this.state.password}
            placeholder="password"
            name="password"
            onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Login" />
      </Form>
  );
  }
}

export default connect(null, { login } )(Login)
