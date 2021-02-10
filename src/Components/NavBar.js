import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Team from '../TeamContainer';
import SearchBar from './SearchBar';
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}
 
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkred'
          }}
        >Home
        </NavLink>
        <NavLink
          to="/teams"
          exact
          style={link}
          activeStyle={{
            background: 'darkred'
          }}
        >Teams
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkred'
          }}
        >About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkred'
          }}
        >Login</NavLink>
      </div>
    )
  }
}
 
export default NavBar;

{/* <Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />          
<Route exact path="/login" component={Login} />
<Route exact path="/signup" component={Signup} /> */}