import React from 'react';
import { useSelector } from 'react-redux';

export default function PlayerList() {

    const allPlayers = useSelector((state) => state.playerReducers.allPlayers)
    console.log(allPlayers);
    
    
    return (<div></div>)
}