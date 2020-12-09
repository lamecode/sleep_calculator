import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import UserNav from './UserNav';
import login from './login';
import Register from './register';




class App extends Component {

  state = {
  	role: "unauthorized",
  	id: 0
  };

  changeState = (role, id) => {
  	this.state.setState({role: role, id: id});
  }

  render() {
  if (this.state.role == "unauthorized") {
  	return (
  	<Router>
  	<Nav />
    <div className="App">
    <header className="App-header">
        Sleep Calculator
      </header>
    <Switch>
    <Route path="/" exact component={Calculator}/>
    <Route path="/login" component={login}/>
    <Route path="/register" component={Register}/>
    </Switch>
    </div>
    </Router>
  );
} else if (this.state.role == "user") {
	return(<Router>
	<UserNav />
	<div className="App">
    <header className="App-header">
        User
      </header>
      <Switch>
    <Route path="/" exact component={Calculator}/>
    <Route path="/user"/>
    <Route path="/chat"/>
    </Switch>
    </div></Router>)
} else if (this.state.role == "doctor") {
	return(<div className="App">
    Doc
    </div>)
}
}
  

}

const Calculator = () => (
<div>
      
      <label for="cars">Choose time you want to wake up at:   </label>
      <form>
      <input type="time" id="appt" name="appt"
       ></input>
      <input type="submit" value="Submit"></input>
    </form>
 </div>
);

export default App;
