import seeds from './seedPalette'
import Palette from './Palette'
import { generatePalette } from "./colorHelpers";
import { Route } from 'react-router-dom'


function App() {
  console.log(generatePalette(seeds[2]))
  return (
    <div>
      <Route exact path="/" render={() => <h1>All PALETTES</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>INDIVIDUAL PALETTE</h1>} />
      {/* <Palette palette={generatePalette(seeds[2])}/> */}
    </div>
  );
}

export default App;
