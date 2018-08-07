import React, { Component } from 'react';
import './App.css';
import Players from '../components/Players/Players';

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
      player.money += parseInt(player.temp, 10);
    } else {
      player.money -= parseInt(player.temp, 10);
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
        <Players
          players={this.state.players}
          update={this.updateTempValue}
          modify={this.modifyMoneyHandler} />
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
