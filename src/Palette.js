import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from './Navbar'
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 500,
  };

  handleSlider = (level) => {
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
        <Navbar level={level} handleSlider={this.handleSlider}/>
        <div className="Palette-colors">{colorBox}</div>
      </div>
    );
  }
}
