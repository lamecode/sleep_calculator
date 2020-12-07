import React from 'react';
import './App.css';

function Login() {
  return (
    <div >
      <form>
      <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username"></input>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password"></input>  
            <button type="submit">Login</button>   
    </form>
    
    </div>
  );

}

export default Login;