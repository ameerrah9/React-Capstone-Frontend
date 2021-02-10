import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h1>Signup</h1>
                <div>
                <input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name"
                    onChange={this.handleInputChange} />
                <label htmlFor="firstname">First Name</label>
                </div>
                <div>
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name"
                    onChange={this.handleInputChange} />
                <label htmlFor="lastname">Last Name</label>
                </div>
                <div>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                    onChange={this.handleInputChange} />
                <label htmlFor="username">Username</label>
                </div>
                <div>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" />
                <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
}
