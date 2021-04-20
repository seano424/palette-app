import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

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
  link: {
    display: 'block',
    fontSize: '2em',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
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
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>react colors</h1>
            <Link className={classes.link} to="/palette/create">create a palette</Link>
          </div>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <div key={p.id}>
                <MiniPalette {...p} handleClick={this.goToPalette} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
