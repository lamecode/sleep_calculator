import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Nav from './Nav';

class Register extends Component {

  state = {
    role: "unauthorized",
    id: 0,
    login: "",
    password: ""
  };


setUserData(data) {
  this.state.role = data.role;
  this.state.id = data.person_id;
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
            <button type="submit" onClick={() => this.register()}>Register</button>   
    </form>
    
    </div>
  );
}
}

export default Register;

