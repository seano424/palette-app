import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>ALL TOGETHER NOW</h1>
        {palettes.map(p => (
          <p key={p.id}>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}