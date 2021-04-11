import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "white",
    border: '10px solid white;'
  },
  colors: {
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    color: "black",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: '1.5rem',
  },
  miniColor: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  }
};

function MiniPalette(props) {
  const { classes, paletteName, colors, emoji } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
