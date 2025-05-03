import Swatch from './Swatch';

const Palette = ({ colors }) => {
  return (
    <div className="palette-grid">
      {colors.map((color, index) => (
        <Swatch key={index} hex={color.hex} />
      ))}
    </div>
  );
};

export default Palette;