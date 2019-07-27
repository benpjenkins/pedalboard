import React, { Component } from "react";
import styled from "styled-components";

const Play = styled.button`
  font-size: 18px;
  font-family: AppleGothic;
  border-radius: 15px;
  ${"" /* height: 16px;
  width: 80px; */}
  background-color: green;
  color: white;
  padding: 1em;
  text-align: center;
  margin: 10px;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
`;

const Stop = styled.button`
  font-size: 18px;
  font-family: AppleGothic;
  border-radius: 15px;
  ${"" /* height: 16px;
  width: 80px; */}
  background-color: Red;
  color: white;
  padding: 1em;
  text-align: center;
  margin: 10px;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
`;

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.player,
      isPlaying: false
    };
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.handleStopButton = this.handleStopButton.bind(this);
  }
  handlePlayButton() {
    if (!this.state.isPlaying) {
      this.state.player.start();
      this.setState({
        ...this.state,
        isPlaying: true
      });
    }
  }
  handleStopButton() {
    this.state.player.stop();
    this.setState({
      ...this.state,
      isPlaying: false
    });
  }
  render() {
    return (
      <div>
        <Play onClick={this.handlePlayButton}>Play</Play>
        <Stop onClick={this.handleStopButton}>Stop</Stop>
      </div>
    );
  }
}

export default Player;
