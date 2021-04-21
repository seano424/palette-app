import React, { Component } from "react";
import "./ColorPickerForm.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  colorPickerForm: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `100%`,
  },
  header: {
    marginBottom: "1.5rem",
  },
  formHeader: {
    fontSize: `1.5rem`,
    textAlign: `center`,
    marginBottom: `1rem`,
  },
  addColorBtn: {
    width: `100%`,
    marginTop: `1rem`,
    padding: `.7rem`,
  },
  colorInput: {
    marginTop: `1.5rem`,
    width: `100%`,
    background: `rgba(0, 0, 0, 0.1)`,
    padding: `.1rem`
  },
  form: {
    width: `94%`,
  },
  headerBtns: {
    margin: `1px`
  }
});

class ColorPickerForm extends Component {
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isColorNameDifferent", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorDifferent", (value) => {
      return this.props.colors.every(
        ({ color }) => color !== this.props.currentColor
      );
    });
  }

  render() {
    const {
      colors,
      clearColors,
      addRandomColor,
      currentColor,
      changeColor,
      addNewColor,
      newColorName,
      handleChange,
      isFull,
      classes,
    } = this.props;

    return (
      <div className={classes.colorPickerForm}>
        <div className={classes.header}>
          <Typography className={classes.formHeader} variant="h4">
            Design your palette
          </Typography>
          <Button
            className={classes.headerBtns}
            variant="contained"
            color="primary"
            onClick={clearColors}
          >
            Clear Palette
          </Button>
          <Button
            className={classes.headerBtns}
            disabled={colors.length >= 20}
            variant="contained"
            color="secondary"
            onClick={addRandomColor}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker color={currentColor} onChangeComplete={changeColor} />
        <ValidatorForm className={classes.form} onSubmit={addNewColor}>
          <TextValidator
            placeholder="Color Name"
            className={classes.colorInput}
            value={newColorName}
            name="newColorName"
            onChange={handleChange}
            validators={[
              "required",
              "isColorDifferent",
              "isColorNameDifferent",
            ]}
            errorMessages={[
              "enter a color name",
              "color already used",
              "that color name is taken",
            ]}
          />

          <Button
            className={classes.addColorBtn}
            type="submit"
            variant="contained"
            disabled={isFull}
            color={isFull ? `primary` : `secondary`}
          >
            {isFull ? "Colors full" : "Add color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
