import React from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: '20%',
    height: '25%',
    position: 'relative',
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    marginBottom: '-3.5px'
  }
}

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root} style={{backgroundColor: props.color }}>
      
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)