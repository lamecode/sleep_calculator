import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class DoctorNav extends Component {

   constructor(props) {
    super(props);
    this.state = {
      id: 2,
      client_id: null,
      users: [],
      chat: []
    };
  }

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user/clients",
    }).then((res) => this.setState({id: this.state.id, client_id: this.state.client_id, users: res.data, chat: this.state.chat}));
  }

  render() {
  const { users } = this.state;  
  return (
    <nav>
    <ul>
    {users.length != 0 && 
    users.map(user => 
    <Link to={`/doctors/${this.state.id}/chat/${user.person_id}`}>
    <li>User {user.person_id}</li>
    </Link>)}    
    </ul>
    </nav>
  );
  }

}

export default DoctorNav;