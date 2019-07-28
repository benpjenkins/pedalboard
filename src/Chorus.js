import React, { Component } from "react";
import styled from "styled-components";
import Tone from "tone";
import Knob from "react-touch-knob";
import "./Knob.css";
import Pedal from "./Pedal.js";
import Toggle from "./Toggle.js";
import ControlContainer from "./ControlContainer";
import Title from "./Title";

const flexDiv = styled.div`
  flex: 0 0 50%;
`;

const Chorus = styled(Pedal)`
  background: rgb(33, 80, 223);
  background: linear-gradient(
    180deg,
    rgba(33, 80, 223, 1) 0%,
    rgba(76, 145, 235, 1) 100%
  );
`;

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleToggleOn = this.handleToggleOn.bind(this);
    this.handleDelayTime = this.handleDelayTime.bind(this);
    this.handleDepth = this.handleDepth.bind(this);
    this.chorus = this.props.chorus;
    this.player = this.props.player;
  }

  componentDidMount() {}
  handleToggleOn() {
    if (this.state.isOn) {
      this.player.disconnect(this.chorus);
      this.setState({
        ...this.state,
        isOn: false
      });
    } else {
      this.player.connect(this.chorus);
      this.setState({
        ...this.state,
        isOn: true
      });
    }
  }
  handleDelayTime(event) {
    console.log("this.chorus :", this.chorus);
    this.chorus.delayTime = event;
  }

  handleDepth(event) {
    this.chorus.depth = event;
  }

  render() {
    return (
      <Chorus>
        <ControlContainer>
          <flexDiv>
            <Knob
              name={"delay"}
              class={"my-knob-class"}
              onChange={this.handleDelayTime}
              min={0}
              max={5}
              step={0.1}
              value={1.5}
            />
            Delay
          </flexDiv>
          <flexDiv>
            <Knob
              class={"my-knob-class"}
              onChange={this.handleDepth}
              min={0}
              max={5}
              step={0.1}
              value={1.5}
            />
            Depth
          </flexDiv>
        </ControlContainer>
        <Title>Chorus</Title>
        <Toggle onClick={this.handleToggleOn} />
      </Chorus>
    );
  }
}

export default Player;
