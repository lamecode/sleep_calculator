import React, { Component } from 'react';
import UserNav from './UserNav';
import Axios from 'axios';

class User extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      doctor_id: 2,
      result: "",
      advice: "",
      isVisible: true
    };
  }

  fetchData(data) {
  	this.setState({id: this.state.id, doctor_id: 2, 
  		result: data.result, advice: this.state.advice, isVisible: true});
  	return data.result;
  }

  fetchData1(data) {
  	this.setState({id: this.state.id, doctor_id: 2, 
  		result: this.state.result, advice: data.advice, isVisible: true});
  	return data.result;
  }

  getResult() {
    var url = "http://localhost:4000/users/" + this.state.id + "/result";
    Axios({
      method: "GET",
      params: {
        id: this.state.id
      },
      withCredentials: true,
      url: url,
    }).then((res) => this.fetchData(res.data));
  }

   getAdvice() {
    var url = "http://localhost:4000/users/" + this.state.id + "/advice";
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
    <div>Advice:</div>       
    </div>
  );
}
  
}


export default User;