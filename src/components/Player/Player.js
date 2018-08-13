import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  state = {
    money: 50
  }

  update = (direction, value) => {
    if (isNaN(parseInt(value, 10))) {
      return;
    }
    let current = this.state.money;
    let val = Math.abs(parseInt(value, 10));
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
    const style = {
      backgroundColor: this.props.color,
      padding: '5px',
      display: 'inline-block',
      textAlign: 'right',
      width: '100px',
      color: 'white',
      fontWeight: 'bold'
    }

    const label = {
      float: 'left',
    }

    const container = {
      padding: '10px'
    }

    const input = {
      margin: '5px',
      width: '20px'
    }

    if (this.props.color === "yellow") {
      style.color = "black";
    }

    let text;
    return  (
      <div style={container}>
        <span style={style}>
          <label style={label}>{this.props.color}</label>
          {this.state.money}
        </span>
        <input
          style={input}
          type="text"
          ref={node => text = node}/>
        <button onClick={() => this.update("+", text.value)}>+</button>
        <button onClick={() => this.update("-", text.value)}>-</button>
      </div>
    )
  }
};

export default Player;
