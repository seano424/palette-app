import React, { Component } from 'react'
import ColorSlider from './ColorSlider'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    const { handleSlider, level } = this.props
    return (
      <header className="Navbar">
        <div className="logo">reactcolorpicker</div>
        <div class="slider-level-info">level: {level}</div>
        <ColorSlider handleSlider={handleSlider}/>
      </header>
    )
  }
}
