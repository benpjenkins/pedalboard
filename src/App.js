import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tone from "tone";
import mp3 from "./Content/feelings.mp3";
import Player from "./Player";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false
    };
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }
  handlePlayButton() {}
  render() {
    const player = new Tone.Player(mp3).toMaster();
    // console.log("player :", player);
    // //play as soon as the buffer is loaded
    // player.autostart = true;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Player player={player} />
        </header>
      </div>
    );
  }
}

export default App;
