import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';


const styles = {
  root: {
    width: "20%",
    height: "25%",
    position: "relative",
    display: "inline-block",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    color: "rgba(0, 0, 0, 0.5)",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "1px",
    padding: "10px",
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

function DraggableColorBox(props) {
  
  const { classes, handleClick, color, name } = props

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}
    >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={() => handleClick(name)}/>
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
