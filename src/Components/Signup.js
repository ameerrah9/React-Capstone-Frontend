import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/users'
import { Form, Button, InputGroup } from 'react-bootstrap'

class Signup extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    location: '',
    username: '',
    email: '',
    img_src: '',
    password: '',

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state)
    this.setState({
      firstname: '',
      lastname: '',
      location: '',
      username: '',
      email: '',
      img_src: '',
      password: '',
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
      <div>
          <input 
            type="text" 
            value={this.state.firstname}
            name="firstname"
            placeholder="firstname"
            onChange={this.handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.lastname}
            name="lastname"
            placeholder="lastname"
            onChange={this.handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.location}
            name="location"
            placeholder="location"
            onChange={this.handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.username}
            name="username"
            placeholder="username"
            onChange={this.handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.email}
            name="email"
            placeholder="email"
            onChange={this.handleInputChange} />
        </div>
        <div>
          <input 
            type="text" 
            value={this.state.img_src}
            name="img_src"
            placeholder="profile photo"
            onChange={this.handleInputChange} />
        </div>
        <div>
        <input 
            type="password" 
            value={this.state.password}
            name="password"
            placeholder="password"
            onChange={this.handleInputChange } />
        </div>
        <input type="submit" value="Signup" />
      </Form>
  );
  }
} 

export default connect(null, { signup } )(Signup)