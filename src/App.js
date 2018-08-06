import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player';

class App extends Component {
  state = {
    players: [
      {money: 50, color: "green", temp: 0},
      {money: 50, color: "red", temp: 0},
      {money: 50, color: "blue", temp: 0},
      {money: 50, color: "yellow", temp: 0},
      {money: 50, color: "purple", temp: 0},
      {money: 50, color: "black", temp: 0}
    ]
  }

  updateTempValue = (event, color) => {
    const player = this.findPlayer(color);

    player.temp = event.target.value;
    const players = [...this.state.players];
    players[this.findPlayerIndex(color)] = player;

    this.setState( {players: players} );
  }

  modifyMoneyHandler = (color, direction, amount) => {
    const player = this.findPlayer(color);

    if (direction === "+") {
      player.money += parseInt(player.temp);
    } else {
      player.money -= parseInt(player.temp);
    }

    const players = [...this.state.players];
    players[this.findPlayerIndex(color)] = player;

    this.setState( {players: players} );
  }

  findPlayerIndex = color => {
    return this.state.players.findIndex(c => {
      return c.color === color;
    });
  }

  findPlayer = color => {
    const playerIndex = this.findPlayerIndex(color);

    return {...this.state.players[playerIndex]};
  }

  render() {
    let players = (
      <div>
      {this.state.players.map(player => {
          return <Player
                    money={player.money}
                    key={player.color}
                    color={player.color}
                    temp={player.temp}
                    updateTemp={(event) => this.updateTempValue(event, player.color)}
                    modify={this.modifyMoneyHandler}/>
      })}
      </div>
    );

    return (
      <div className="App">
        {players}
      </div>
    );
  }
}

export default App;
