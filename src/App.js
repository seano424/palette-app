import seeds from './seedPalette'
import Palette from './Palette'
import { generatePalette } from "./colorHelpers";


function App() {
  console.log(generatePalette(seeds[2]))
  return (
    <div>
      <Palette palette={generatePalette(seeds[2])}/>
    </div>
  );
}

export default App;
