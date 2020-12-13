import React from 'react';
import './App.css';
import Nav from './Nav';

function login() {
  return (
    <div >
      <Nav />
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

export {login};