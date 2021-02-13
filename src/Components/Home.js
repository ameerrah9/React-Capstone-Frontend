import React from 'react';
import Login from "./Login"
import Logout from './Logout';
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <h2>Welcome to GAMEZONE</h2>
        <h4>Please <Link to='/login'>Login</Link>, Not a user? <Link to='/signup'>Sign Up</Link></h4>
    </div>
)

export default Home;