import React, { Component } from 'react';
import UserNav from './UserNav';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      doctor_id: 2,
      messages: []
    };
  }

  componentDidMount() {
    var url = "http://localhost:4000/users/" + this.state.id + "/chat/" + this.state.doctor_id;
    Axios({
      method: "GET",
      params: {
        id: this.state.id,
        doctor_id: this.state.doctor_id
      },
      withCredentials: true,
      url: url,
    }).then((res) => this.setState({id: this.state.id, doctor_id: this.state.doctor_id, messages: res.data}))
  }

postMessage(text) {
  var url = "http://localhost:4000/users/" + this.state.id + "/chat/" + this.state.doctor_id;
    Axios({
      method: "POST",
      data: {
        message: text
      },
      withCredentials: true,
      url: url,
    }).then((res) => window.location.reload());
  }

  render() {
    const { messages } = this.state;
    return (
    <div className="App">
    <UserNav />
    {messages.length != 0 &&
      messages.map(message =>
      <div>
      <div>{message.login}</div>
      <div>{message.message}</div>
      <div>{message.time}</div>
      </div>)}
    <input type="text" id="text"></input>
    <Link to={`/users/${this.state.id}/chat/${this.state.doctor_id}`}>
    <button type="submit" onClick={() => {
                this.postMessage(document.getElementById("text").value);
            }}>Post</button></Link>        
    </div>
  );
}
  
}


export default Chat;