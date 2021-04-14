import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import seeds from "./seedPalette";
import Palette from "./Palette";
import PaletteList from './PaletteList'

function App() {
  const findPalette = (id) => {
    return seeds.find(seed => seed.id === id)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seeds} {...routeProps}/>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeParams) => <Palette palette={generatePalette(findPalette(routeParams.match.params.id))}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
