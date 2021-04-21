import React, { Component } from "react";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/core/styles";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 300;

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PaletteForm extends Component {
  state = {
    open: true,
    currentColor: "teal",
    colors: [],
    newColorName: "",
    newPaletteName: "",
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  changeColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.setState((prevState) => ({
      colors: [...prevState.colors, newColor],
      newColorName: "",
    }));
  };

  handleSubmit = () => {
    const newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };
    console.log(newPalette);
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  removeColor = (colorName) => {
    // this.setState({colors: this.state.colors.filter(color => color.name !== colorName)})
    this.setState((prevState) => {
      return {
        ...prevState,
        colors: prevState.colors.filter((color) => color.name !== colorName),
      };
    });
  };

  clearColors = () => {
    this.setState({
      colors: [],
    });
  };

  addRandomColor = () => {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    const randNum = Math.floor(Math.random() * allColors.length);
    const randColor = allColors[randNum];
    if (
      !this.state.colors.includes(randColor) &&
      this.state.colors.length < 20
    ) {
      this.setState({
        colors: [...this.state.colors, randColor],
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { colors } = this.state;
    const isFull = colors.length >= 20;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          classes={classes}
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
          newPaletteName={this.state.newPaletteName}
          handleChange={this.handleChange}
          palettes={this.props.palettes}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <ColorPickerForm
            colors={colors}
            clearColors={this.clearColors}
            addRandomColor={this.addRandomColor}
            currentColor={this.state.currentColor}
            changeColor={this.changeColor}
            addNewColor={this.addNewColor}
            newColorName={this.state.newColorName}
            handleChange={this.handleChange}
            isFull={isFull}
          />
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={this.state.colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteForm);
