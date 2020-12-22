import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Doctor extends Component {
	
   constructor(props) {
    super(props);
    this.state = {
      id: 2,
      client_id: 1,
      chat: []
    };
  }

  componentDidMount() {
      var url = "http://localhost:4000/users/" + this.state.client_id + "/chat/" + this.state.id;
      Axios({
      method: "GET",
      params: {
        id: this.state.client_id,
        doctor_id: this.state.id
      },
      withCredentials: true,
      url: url,
    }).then((res) => this.setState({id: this.state.id, client_id: this.state.client_id, chat: res.data}))
  }

  postMessage(text) {
  var url = "http://localhost:4000/users/" + this.state.id + "/chat/" + this.state.client_id;
    Axios({
      method: "POST",
      data: {
        message: text
      },
      withCredentials: true,
      url: url,
    }).then((res) => window.location.reload());
  }

  addAdvice(advice) {
    var url = "http://localhost:4000/users/" + this.state.client_id + "/advice";
    Axios({
      method: "POST",
      data: {
        message: advice
      },
      withCredentials: true,
      url: url,
    }).then((res) => console.log("success"));
  }

  render() {
  const { chat } = this.state;   
  return (
    <div className="App">
    {chat.length != 0 &&
      chat.map(message =>
      <div>
      <div>{message.login}</div>
      <div>{message.message}</div>
      <div>{message.time}</div>
      </div>)}
    <input type="text" id="text"></input>
    <Link to={`/doctors/${this.state.id}/chat/${this.state.client_id}`}>
    <button type="submit" onClick={() => {
                this.postMessage(document.getElementById("text").value);
            }}>Post</button></Link> 
    <input type="text" id="text2"></input>        
    <Link to={`/doctors/${this.state.id}/chat/${this.state.client_id}`}>
    <button type="submit" onClick={() => {
                this.addAdvice(document.getElementById("text2").value);
            }}>Add advice</button></Link>               
    </div>
  );
  }
  
}


export default Doctor;