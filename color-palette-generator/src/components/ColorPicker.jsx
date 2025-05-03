import { useState } from 'react';

const ColorPicker = ({ onAddColor }) => {
  const [color, setColor] = useState('#4F46E5');

  const handleAdd = () => {
    onAddColor(color);
    setColor('#4F46E5');
  };

  return (
    <div className="color-picker">
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <button onClick={handleAdd} className="add-btn">
        Add Base Color
      </button>
    </div>
  );
};

export default ColorPicker;