import React, { Component } from "react";
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
  render() {

    const colors = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name}/>
    ))
    
    return (
      <div className="Palette">
        <div class="Palette-colors">
          {colors}
        </div>
      </div>
    );
  }
}
