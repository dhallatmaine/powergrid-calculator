import React from 'react';
import Player from './Player/Player'

const players = (props) => props.players.map(player => {
    return <Player
              money={player.money}
              key={player.color}
              color={player.color}
              temp={player.temp}
              update={props.update}
              modify={props.modify}/>
})

export default players;
