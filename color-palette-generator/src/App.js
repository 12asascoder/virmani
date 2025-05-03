import { useState, useEffect, useMemo } from 'react';
import ColorPicker from './components/ColorPicker';
import Palette from './components/Palette';
import { generatePalette } from './utils/colorUtils';
import { showConsoleArt } from './utils/consoleStyles';

function App() {
  const [baseColors, setBaseColors] = useState(['#4F46E5', '#EC4899']);
  const palette = useMemo(() => generatePalette(baseColors), [baseColors]);

  useEffect(() => {
    showConsoleArt();
  }, []);

  const handleAddColor = (newColor) => {
    setBaseColors(prev => [...prev, newColor]);
  };

  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      <ColorPicker onAddColor={handleAddColor} />
      <Palette colors={palette} />
    </div>
  );
}

export default App;