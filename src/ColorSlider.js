import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './ColorSlider.css'

export default class ColorSlider extends Component {
  render() {
    return (
      <div class="slider">
        <Slider
          defaultValue={500}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.props.handleSlider}
        />
      </div>
    );
  }
}
