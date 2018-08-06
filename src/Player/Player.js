import React from 'react';
import './Player.css';

const player = (props) => {
  const style = {
    backgroundColor: props.color,
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

  if (props.color === "yellow") {
    style.color = "black";
  }

  return  <div style={container}>
            <span style={style}>
              <label style={label}>{props.color}</label>
              {props.money}
            </span>
            <input id="test" style={input} type="text" onChange={props.updateTemp} value={props.temp} />
            <button onClick={() => props.modify(props.color, "+")}>+</button>
            <button onClick={() => props.modify(props.color, "-")}>-</button>
          </div>
};

export default player;
