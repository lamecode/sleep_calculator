import React, { Component } from 'react';
import UserNav from './UserNav';

class Chat extends Component {

  render() {
    return (
    <div className="App">
    <UserNav />
    <div class="container">
  <img src="/w3images/bandmember.jpg" alt="Avatar"></img>
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>        
    </div>
  );
}
  
}


export default Chat;