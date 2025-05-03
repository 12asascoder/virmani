import tinycolor from 'tinycolor2';

export const generatePalette = (baseColors) => {
  const palette = [];
  
  baseColors.forEach(color => {
    const colorObj = tinycolor(color);
    palette.push({
      hex: colorObj.toHexString(),
      isBase: true
    });
    
    // Generate tints and shades
    for (let i = 1; i <= 3; i++) {
      palette.push({
        hex: colorObj.clone().lighten(10 * i).toHexString(),
        isBase: false
      });
      palette.push({
        hex: colorObj.clone().darken(10 * i).toHexString(),
        isBase: false
      });
    }
  });
  
  return [...new Map(palette.map(item => [item.hex, item])).values()];
};