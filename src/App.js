import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import seeds from "./seedPalette";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import ColorPalette from "./ColorPalette";
import PaletteForm from "./PaletteForm";

function App() {
  const findPalette = (id) => {
    return seeds.find((seed) => seed.id === id);
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seeds} {...routeProps} />
          )}
        />
        <Route exact path="/palette/create" render={() => <PaletteForm />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path={`/palette/:paletteId/:colorId`}
          render={(routeProps) => (
            <ColorPalette
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
              color={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
