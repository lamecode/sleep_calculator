import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Nav from './Nav';
import User from './User';
import {Redirect} from 'react-router-dom';
import { browserHistory } from 'react-router';

class Register extends Component {

  constructor(props, context) {
      super(props, context);
  }

  state = {
    login: "",
    password: ""
  };


setUserData(data) {
  this.state.login = "";
  this.state.password = "";
  if (data.role == "user") {
    User.state.id = data.person_id;
    this.props.history.push('/user/${data.person_id}').catch((error) => {
      console.log(error)
    });    
  }
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
    }).then((res) => this.setUserData(res.data));
  }

render() {
  return (
    <div >
      <Nav />
      <form>
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
            <button type="button" onClick={() => this.register()}>Register</button>   
    </form>
    
    </div>
  );
}
}

export {Register};

