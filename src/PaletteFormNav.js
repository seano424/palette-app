import React, { Component } from "react";
import FormDialog from "./FormDialog";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm } from "react-material-ui-form-validator";

export default class PaletteFormNav extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameDifferent", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleChange,
      handleSubmit,
      newPaletteName,
    } = this.props;

    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
               Pick a color 🐠
            </Typography>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <FormDialog
                newPaletteName={newPaletteName}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ height: "100%", margin: '1rem' }}
                >
                  Go Back
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
