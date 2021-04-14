import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
  };

  handleSlider = (level) => {
    this.setState({ level });
  };

  handleFormatChange = (format) => {
    this.setState({ format });
  };

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level } = this.state;

    const colorBox = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[this.state.format]}
        name={color.name}
        colorId={color.id}
        paletteId={id}
      />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleSlider={this.handleSlider}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="Palette-colors">{colorBox}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
