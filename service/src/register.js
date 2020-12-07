import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = Axios.post("https://localhost:4000/register",
   {username: usernameReg, password: passwordReg}).then((response) =>
   console.log(response));

  return (
    <div >
      <form>
      <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}></input>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}></input>  
            <button type="submit" onClick={register}>Register</button>   
    </form>
    
    </div>
  );

}

export default Register;