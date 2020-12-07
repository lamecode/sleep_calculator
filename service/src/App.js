import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import login from './login';
import Register from './register';


function App() {
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
