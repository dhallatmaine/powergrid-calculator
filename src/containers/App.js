import React, { Component } from 'react';
import './App.css';
import Player from '../components/Player/Player';

class App extends Component {
  render() {
    return (
      <div>
        <Player color="green" />
        <Player color="red" />
        <Player color="blue" />
        <Player color="yellow" />
        <Player color="purple" />
        <Player color="black" />
      </div>
    );
  }
}

export default App;
