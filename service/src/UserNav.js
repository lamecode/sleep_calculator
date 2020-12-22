import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function UserNav() {

  const state = {
    id: 1,
    doctor_id: 2
  };

  return (
    <nav>
    <ul>
    <Link to={`/users/${state.id}`}>
    <li>User</li>
    </Link>
    <Link to='/calculator'>
    <li>Sleep calculator</li>
    </Link>
    <Link to={`/users/${state.id}/chat/${state.doctor_id}`}>
    <li>Chat</li>
    </Link>
    </ul>
    </nav>
  );

}

export default UserNav;