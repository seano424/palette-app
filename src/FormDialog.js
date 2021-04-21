import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
export default class FormDialog extends Component {
  state = {
    stage: "form",
  };

  handleClickOpen = () => {
    this.setState({
      stage: "formOpen",
    });
  };

  handleClose = () => {
    this.setState({
      stage: "form",
    });
  };

  showEmojiPicker = () => {
    this.setState({
      stage: "emoji",
    });
  };

  handleMystery = (mystery) => {
    const emoji = mystery.native
    this.props.handleSubmit(emoji)
  }

  render() {
    const { stage } = this.state;
    const { newPaletteName, handleChange } = this.props;

    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog open={stage === "emoji"}>
          <Picker onSelect={this.handleMystery} />
        </Dialog>
        <Dialog
          open={stage === "formOpen"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextValidator
                fullWidth
                margin="normal"
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                type="submit"
                // onClick={this.handleClose}
                color="primary"
                variant="contained"
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}
