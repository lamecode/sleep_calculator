import React, { Component } from 'react';
import UserNav from './UserNav';
import Axios from 'axios';

class User extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      result: "",
      isVisible: false
    };
  }

  fetchData(data) {
  	this.setState({id: this.state.id, result: data.result, isVisible: true});
  	return data.result;
  }

  getResult() {
    var url = "http://localhost:4000/user/" + this.state.id + "/result";
    Axios({
      method: "GET",
      params: {
        id: this.state.id
      },
      withCredentials: true,
      url: url,
    }).then((res) => this.fetchData(res.data));
  }

  render() {
    return (
    <div className="App">
    <UserNav />
    <div>Selected time:</div>
    <div>{this.getResult()}</div>        
    {this.state.isVisible && <div>{this.state.result}</div>}        
    </div>
  );
}
  
}


export default User;