import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function UserNav() {
  return (
    <nav>
    <ul>
    <Link to='/user/:id'>
    <li>User</li>
    </Link>
    <Link to='/user/calculator'>
    <li>Sleep calculator</li>
    </Link>
    <Link to='/user/chat'>
    <li>Chat</li>
    </Link>
    </ul>
    </nav>
  );

}

export default UserNav;