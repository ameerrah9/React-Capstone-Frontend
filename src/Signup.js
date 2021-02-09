import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
                <div>
                <input type="text" name="firstname" placeholder="First Name" />
                <label htmlFor="firstname">First Name</label>
                </div>
                <div>
                <input type="text" name="lastname" placeholder="Last Name" />
                <label htmlFor="lastname">Last Name</label>
                </div>
                <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
}
