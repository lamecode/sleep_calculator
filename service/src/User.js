import React, { Component } from 'react';
import UserNav from './UserNav';

class User extends Component {
	
  user = {
  	id: 0
  }

  render() {
    return (
    <div className="App">
    <UserNav />
    <div>Selected time:</div>
    </div>
  );
}
  
}


export default User;