import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import seeds from "./seedPalette";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import ColorPalette from "./ColorPalette";
import PaletteForm from "./PaletteForm";
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    palettes: seeds
  }

  findPalette = (id) => {
    return this.state.palettes.find((palette) => palette.id === id);
  };

  savePalette = (newPalette) => {
    this.setState({palettes: [...this.state.palettes, newPalette]})
  };

  render() {
    return (
      <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/create"
          render={(routeProps) => (
            <PaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path={`/palette/:paletteId/:colorId`}
          render={(routeProps) => (
            <ColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              color={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    </div>
    )
  }
}
