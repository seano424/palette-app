import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default class FormDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { open } = this.state;
    const { handleSubmit, newPaletteName, handleChange } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <ValidatorForm
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "40%",
              }}
            >
              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                name="newPaletteName"
                onChange={handleChange}
                validators={["required", "isPaletteNameDifferent"]}
                errorMessages={[
                  "palette name required",
                  "palette name is already in use",
                ]}
              />
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={this.handleClose} color="primary" variant="contained">
              Save Palette
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
