import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  state = {
    money: 50,
    temp: 0
  }

  update = (direction) => {
    if (isNaN(parseInt(this.state.entered, 10))) {
      return;
    }
    let current = this.state.money;
    let val = Math.abs(parseInt(this.state.entered, 10));
    if (direction === "+") {
      current = current + val;
    } else {
      if (current - val < 0) {
        current = 0;
      } else {
        current = current - val;
      }
    }
    this.setState({money: current});
  }

  render() {
    return  (
      <div class="container">
        <span
          style={{
            backgroundColor: this.props.color,
            color: this.props.color === "yellow" ? "black" : "white"}}>
              <label>{this.props.color}</label>
              {this.state.money}
        </span>
        <input
          type="text"
          value={this.state.entered}
          onChange={(event) => {this.setState({temp: event.target.value})}}/>
        <button onClick={() => this.update("+")}>+</button>
        <button onClick={() => this.update("-")}>-</button>
      </div>
    )
  }
};

export default Player;
