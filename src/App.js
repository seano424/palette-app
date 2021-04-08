import seeds from './seedPalette'
import Palette from './Palette'

function App() {
  return (
    <div>
      <Palette {...seeds[1]}/>
    </div>
  );
}

export default App;
