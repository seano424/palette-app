import seeds from "./seedPalette";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  console.log(seeds);
  const findPalette = (id) => {
    return seeds.find(seed => seed.id === id)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>All PALETTES</h1>} />
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
