import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import ColorSlider from "./ColorSlider";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom'

import "./Navbar.css";

export default class Navbar extends Component {
  state = {
    format: "hex",
    open: false,
  };

  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.handleFormatChange(this.state.format);
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { handleSlider, level } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-level-info">level: {level}</div>
        <ColorSlider handleSlider={handleSlider} level={level} />
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #1234EF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <div className="snackbar">
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.open}
            message={<span id="msg-format">Format Changed to {format.toUpperCase()}!</span>}
            onClose={this.handleClose}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </div>
      </header>
    );
  }
}
