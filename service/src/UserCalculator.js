import React, { Component } from 'react';
import Nav from './Nav';
import Axios from 'axios';
import UserNav from './UserNav';

class UserCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      saveVisible: false,
      result1: "",
      result2: "",
      result3: ""
    };
  }

  calculateTime(input_time) {
    var res1; 
    if ((input_time.split(":")[0] - 4) >= 0) {
      res1 = (input_time.split(":")[0] - 4) < 10? "0" + (input_time.split(":")[0] - 4) + ":" + input_time.split(":")[1] : 
      (input_time.split(":")[0] - 4) + ":" + input_time.split(":")[1]
    } else {
      res1 = 24 + (input_time.split(":")[0] - 4);
      res1 = res1 < 10? "0" + res1 + ":" + input_time.split(":")[1] : 
      res1 + ":" + input_time.split(":")[1]
    };
    var res2; 
    if ((input_time.split(":")[0] - 8) >= 0) {
      res2 = (input_time.split(":")[0] - 8) < 10? "0" + (input_time.split(":")[0] - 8) + ":" + input_time.split(":")[1] : 
      (input_time.split(":")[0] - 8) + ":" + input_time.split(":")[1]
    } else {
      res2 = 24 + (input_time.split(":")[0] - 8);
      res2 = res2 < 10? "0" + res2 + ":" + input_time.split(":")[1] : 
      res2 + ":" + input_time.split(":")[1]
    };
    var res3; 
    if ((input_time.split(":")[0] - 12) >= 0) {
      res3 = (input_time.split(":")[0] - 12) < 10? "0" + (input_time.split(":")[0] - 12) + ":" + input_time.split(":")[1] : 
      (input_time.split(":")[0] - 12) + ":" + input_time.split(":")[1]
    } else {
      res3 = 24 + (input_time.split(":")[0] - 12);
      res3 = res3 < 10? "0" + res3 + ":" + input_time.split(":")[1] : 
      res3 + ":" + input_time.split(":")[1]
    };
    this.setState({
      id: this.state.id,
      saveVisible: true,
      result1: res1,
      result2: res2,
      result3: res3
    });
  }

  saveResult(time) {
    var d = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).toISOString().split("T")[0];
    var url = "http://localhost:4000/user/" + this.state.id + "/result";
    Axios({
      method: "POST",
      data: {
        date: d,
        result: time
      },
      params: {
        id: this.state.id
      },
      withCredentials: true,
      url: url,
    }).then((res) => console.log("success"));
  }


  render() {
  return(
    <div>
      <UserNav />
      <label >Choose time you want to wake up at:   </label>
      <form>
      <input type="time" id="appt" name="appt"></input>
      <input type="button" value="Submit" onClick={() => {
                this.calculateTime(document.getElementById("appt").value);
            }}></input>
    </form>
    {this.state.saveVisible &&
      <div> 
      <div>Try to go to bed at</div>
      <select name="cars" id="cars">
        <option value={this.state.result1}>{this.state.result1}</option>
        <option value={this.state.result2}>{this.state.result2}</option>
        <option value={this.state.result3}>{this.state.result3}</option>
      </select>
      {this.state.id != 0 && <input type="button" value="Save" onClick={() => {
                this.saveResult(document.getElementById("cars").value);
            }}></input>}
      </div>
      }
    </div>);
}
  

}

export {UserCalculator};
