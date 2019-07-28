import React, { Component } from "react";
import "./App.css";
import Tone from "tone";
import mp3 from "./Content/feelings.mp3";
import Player from "./Player";
import Chorus from "./Chorus";
import Overdrive from "./Overdrive";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
`;

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
    const overdrive = new Tone.Distortion(0.4).toMaster();
    const chorus = new Tone.Chorus(1.5, 4.5, 0.7).toMaster();
    return (
      <div className="App">
        <header className="App-header">
          <Board>
            <Chorus player={player} chorus={chorus} />
            <Overdrive player={player} overdrive={overdrive} />
          </Board>
          <Player player={player} />
        </header>
      </div>
    );
  }
}

export default App;
