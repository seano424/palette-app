import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import PaletteFooter from './PaletteFooter'

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
    const { level, format } = this.state;

    const colorBox = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        colorId={color.id}
        paletteId={id}
        showLink={true}
      />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={level}
          handleSlider={this.handleSlider}
          handleFormatChange={this.handleFormatChange}
          showSlider={true}
        />
        <div className="Palette-colors">{colorBox}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName}/>
      </div>
    );
  }
}
