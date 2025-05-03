import { useState } from 'react';
import tinycolor from 'tinycolor2';

const Swatch = ({ hex }) => {
  const [copied, setCopied] = useState(false);
  const color = tinycolor(hex);
  const textColor = color.isLight() ? '#000000' : '#ffffff';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div 
      className="swatch" 
      style={{ backgroundColor: hex }}
      onClick={handleCopy}
    >
      <span 
        className="hex-value" 
        style={{ 
          color: textColor,
          backgroundColor: color.isLight() 
            ? 'rgba(0, 0, 0, 0.15)' 
            : 'rgba(255, 255, 255, 0.15)'
        }}
      >
        {copied ? 'Copied!' : hex}
      </span>
    </div>
  );
};

export default Swatch;