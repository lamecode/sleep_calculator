import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Nav from './Nav';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

class Register extends Component {

  state = {
    login: "",
    password: "",
    id: 1
  };


setUserData() {
  this.state.login = "";
  this.state.password = "";   
  }


register() {
    Axios({
      method: "POST",
      data: {
        username: this.state.login,
        password: this.state.password,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => this.setUserData());
  }

render() {
  return (
    <div >
      <Nav />
      <form action="/user">
      <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username"
            onChange={(e) => {
              this.state.login = e.target.value;
            }}></input>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password"
            onChange={(e) => {
              this.state.password = e.target.value;
            }}></input>
            <Link to={`/users/${this.state.id}`}>
               <button type="button" onClick={() => this.register()}>Register</button>
            </Link>               
    </form>
    
    </div>
  );
}
}


export {Register};

