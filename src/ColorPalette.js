import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };

    this._shades = this.gatherShades(this.props.palette, this.props.color);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeFormat = (val) => {
    this.setState({ format: val });
  };

  render() {
    const { format } = this.state;
    const { emoji, paletteName, id } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        className="single-color"
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleFormatChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link className="back-button" to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}
