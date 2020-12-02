import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  	<Router>
    <div className="App">
      <header className="App-header">
        Sleep Calculator
      </header>
      <label for="cars">Choose time you want to wake up at:   </label>
      <form>
      <input type="time" id="appt" name="appt"
       ></input>
      <input type="submit" value="Submit"></input>
    </form>
    <div>Login</div>
    <div>Register</div>
    <Route path="/login" />
    <Route path="/register" />
    </div>
    </Router>
  );

}

export default App;
