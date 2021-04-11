import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import seeds from "./seedPalette";
import Palette from "./Palette";
import PaletteList from './PaletteList'

function App() {
  console.log(seeds);
  const findPalette = (id) => {
    return seeds.find(seed => seed.id === id)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seeds}/>} />
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
