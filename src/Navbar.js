import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import ColorSlider from "./ColorSlider";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

export default class Navbar extends Component {
  state = {
    format: "hex",
    open: false,
  };

  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.handleChange(this.state.format);
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
        <div className="logo">reactcolorpicker</div>
        <div class="slider-level-info">level: {level}</div>
        <ColorSlider handleSlider={handleSlider} level={level} />
        <div class="select-container" style={{ marginLeft: "6rem" }}>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #1234EF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <div class="snackbar">
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.open}
            message={<span>Format Changed!</span>}
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
