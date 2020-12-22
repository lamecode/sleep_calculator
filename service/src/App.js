import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './Nav';
import {login} from './login';
import {Register} from './register';
import {Calculator} from './Calculator';
import User from './User';
import Chat from './Chat';
import {UserCalculator} from './UserCalculator';
import Doctor from './Doctor';
import DoctorNav from './DoctorNav';

class App extends Component {

  render() {
    return (
  	<Router>
    <div className="App">
    <header className="App-header">
        Sleep Calculator
      </header>
    <Switch>
    <Route path="/" exact component={Calculator}/>
    <Route path="/login" component={login}/>
    <Route path="/register" component={Register}/>
    <Route path="/users/:id" exact component={User}/>
    <Route path="/calculator" component={UserCalculator}/>
    <Route path="/users/:id1/chat/:id2" component={Chat}/>
    <Route path="/doctors/:id/chat" exact component={DoctorNav}/>
    <Route path="/doctors/:id1/chat/:id2" component={Doctor}/>
    </Switch>
    </div>
    </Router>
  );
}
  
}


export default App;
