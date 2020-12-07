import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <ul>
    <Link to='/'>
    <li>Sleep calculator</li>
    </Link>
    <Link to='/login'>
    <li>Login</li>
    </Link>
    <Link to='/register'>
    <li>Sign up</li>
    </Link>
    </ul>
    </nav>
  );

}

export default Nav;