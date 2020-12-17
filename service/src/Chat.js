import React, { Component } from 'react';
import UserNav from './UserNav';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      result: "",
      isVisible: false
    };
  }

  render() {
    return (
    <div className="App">
    <UserNav />
    <div></div>
    <div class="container">
    <div></div>
  <p>Sweet! So, what do you wanna do today?</p>
  <span class="time-right">11:02</span>
</div>        
    </div>
  );
}
  
}


export default Chat;