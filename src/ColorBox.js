import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from 'chroma-js'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  copyText: {
    color: props => chroma(props.background).luminance() < .5 ? 'white' : 'black'
  }
}

class ColorBox extends Component {
  state = {
    copied: false,
  };

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };

  render() {


    const { name, background, colorId, paletteId, showLink, classes } = this.props;

    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "open"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "open"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.copyText}>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${classes.copyText}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox)
