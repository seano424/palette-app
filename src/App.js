import seeds from './seedPalette'
import Palette from './Palette'

function App() {
  return (
    <div>
      <Palette {...seeds[2]}/>
    </div>
  );
}

export default App;
