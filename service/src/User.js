import React, { Component } from 'react';
import UserNav from './UserNav';


class User extends Component {

  state = {
  	id: 0
  }

  setUserState(number) {
  	this.state.id = number;
 // 	return (<Redirect to='/user'>);
  }	

  render() {
    return (
    <div className="App">
    <UserNav />
    <header className="App-header">
        Sleep Calculator
      </header>
    </div>
  );
}
  
}


export default User;