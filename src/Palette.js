import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 500,
  };

  handleSlider = (level) => {
    console.log(level);
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBox = colors[level].map((color) => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <div class="slider">
          <Slider
            defaultValue={500}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.handleSlider}
          />
        </div>
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}
