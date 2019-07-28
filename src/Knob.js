import React, { Component } from "react";
import styled from "styled-components";

class Knob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  render() {
    return (
      <input
        type="range"
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Knob;
