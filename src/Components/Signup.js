import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Users } from '../actions/users';

export default class Signup extends Component {
    
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
            <h1>Signup</h1>
                <div>
                <input 
                    type="text" 
                    value={this.state.input} 
                    placeholder="First Name"
                    onChange={(event) => this.handleInputChange(event)} />
                <label htmlFor="firstname">First Name</label>
                </div>
                <div>
                <input 
                    type="text" 
                    value={this.state.input} 
                    placeholder="Last Name"
                    onChange={(event) => this.handleInputChange(event)} />
                <label htmlFor="lastname">Last Name</label>
                </div>
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
        Users: formData => dispatch({ type: 'ADD_USER', payload: formData })
    };
  };
  
  
  export default connect(null, mapDispatchToProps)(Signup);