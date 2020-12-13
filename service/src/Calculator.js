import React, { Component } from 'react';
import Nav from './Nav';

class Calculator extends Component {

  render() {
  return(
    <div>
      <Nav />
      <label >Choose time you want to wake up at:   </label>
      <form>
      <input type="time" id="appt" name="appt"
       ></input>
      <input type="submit" value="Submit"></input>
    </form>
    </div>);
}
  

}

export {Calculator};
