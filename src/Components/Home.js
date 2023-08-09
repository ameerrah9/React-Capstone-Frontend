import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
  <h3>WELCOME TO GAMEZONE</h3>
  <p>Where NBA fans everywhere can unite.</p>
    <span>
      <Link to='/signup'>Sign Up</Link> or <Link to='/login'>Log In</Link>
    </span>
    <br></br>
    <img alt='' width={100} height={200} src='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/210px-National_Basketball_Association_logo.svg.png' />
  </div>

);

export default Home;
