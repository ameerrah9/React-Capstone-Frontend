import React from 'react';
import { connect } from 'react-redux'
import { Users } from '../Actions/Users';

export class Login extends React.Component {

  state = {
    input: '',
}

handleInputChange = event => {
    this.setState({
      input: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.Users(this.state);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <h1>Login</h1>
        <div>
        <input 
            type="text" 
            value={this.state.input}
            placeholder="Username"
            onChange={(event) => this.handleInputChange(event)} />
        <label htmlFor="username">Username</label>
        </div>
        <div>
        <input 
            type="password" 
            value={this.state.input}
            placeholder="Password" />
        <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Users: (newUser) => {
      dispatch(Users(newUser))
    }
  };
};


export default connect(null, mapDispatchToProps)(Login);