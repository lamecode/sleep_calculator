import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './Nav';
import {login} from './login';
import {Register} from './register';
import {Calculator} from './Calculator';
import User from './User';


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
    <Route path="/user/:id" component={User}/>
    <Route path="/user/chat"/>
    <Route path="/user/calculator"/>
    </Switch>
    </div>
    </Router>
  );
}
  
}


export default App;
