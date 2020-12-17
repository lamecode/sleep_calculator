import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function UserNav() {

  const state = {
    id: 1
  };

  return (
    <nav>
    <ul>
    <Link to={`/user/${state.id}`}>
    <li>User</li>
    </Link>
    <Link to='/calculator'>
    <li>Sleep calculator</li>
    </Link>
    <Link to='/chat'>
    <li>Chat</li>
    </Link>
    </ul>
    </nav>
  );

}

export default UserNav;