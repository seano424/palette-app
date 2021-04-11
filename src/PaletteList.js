import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>react colors</h1>
          </div>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <div key={p.id}>
                <MiniPalette {...p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
