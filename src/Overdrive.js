import React, { Component } from "react";
import styled from "styled-components";
import Tone from "tone";
import knob from "react-touch-knob";
import Pedal from "./Pedal.js";
import Toggle from "./Toggle.js";
import ControlContainer from "./ControlContainer";
import Title from "./Title";

const Knob = styled(knob)`
  width: 10px;
`;

const Overdrive = styled(Pedal)`
  background: rgb(186, 18, 18);
  background: linear-gradient(
    180deg,
    rgba(186, 18, 18, 1) 0%,
    rgba(235, 76, 76, 1) 100%
  );
`;

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleToggleOn = this.handleToggleOn.bind(this);
    this.handleGain = this.handleGain.bind(this);
    this.overdrive = this.props.overdrive;
    this.player = this.props.player;
  }

  componentDidMount() {}
  handleToggleOn() {
    if (this.state.isOn) {
      this.player.disconnect(this.overdrive);
      this.setState({
        ...this.state,
        isOn: false
      });
    } else {
      this.player.connect(this.overdrive);
      this.setState({
        ...this.state,
        isOn: true
      });
    }
  }
  handleGain(event) {
    console.log("event :", event);
    console.log("this.overdrive :", this.overdrive);
    this.overdrive.distortion = event;
  }

  render() {
    return (
      <Overdrive>
        <ControlContainer>
          <div>
            <Knob
              class={"my-knob-class"}
              onChange={this.handleGain}
              min={0.3}
              max={3}
              step={0.1}
              value={1.5}
            />
            Gain
          </div>
        </ControlContainer>
        <Title>Overdrive</Title>
        <Toggle onClick={this.handleToggleOn} />
      </Overdrive>
    );
  }
}

export default Player;
