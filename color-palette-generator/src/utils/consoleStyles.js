export const consoleStyles = {
    gradientHeader: [
      'font-size: 18px',
      'font-weight: bold',
      'padding: 10px 20px',
      'border-radius: 8px',
      'background: linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      'color: white',
      'text-shadow: 2px 2px 4px rgba(0,0,0,0.3)',
      'border: 2px solid #ffffff30'
    ].join(';'),
    
    gradientSuccess: [
      'background: linear-gradient(45deg, #43e97b, #38f9d7)',
      'color: white',
      'padding: 8px 15px',
      'border-radius: 4px',
      'font-weight: bold'
    ].join(';'),
    
    gradientWarning: [
      'background: linear-gradient(45deg, #ffd93d, #ff6b6b)',
      'color: white',
      'padding: 8px 15px',
      'border-radius: 4px',
      'font-weight: bold'
    ].join(';'),
    
    rainbowText: [
      'background-image: linear-gradient(45deg, #ff6b6b, #ffd93d, #4ecdc4, #4b7bec)',
      '-webkit-background-clip: text',
      'color: transparent',
      'font-weight: bold',
      'font-size: 16px'
    ].join(';')
  };
  
  export const showConsoleArt = () => {
    console.log('%c✨ Color Palette Generator ✨', consoleStyles.gradientHeader);
    console.log('%c🚀 Palette Generated Successfully!', consoleStyles.gradientSuccess);
    console.log('%c⚠️ Remember to copy your favorite colors!', consoleStyles.gradientWarning);
    console.log('%c🌈 Made with gradient love!', consoleStyles.rainbowText);
    
    // ASCII Art with Gradient
    console.log(
      `%c
       _____      _ _       _   
      / ____|    | | |     | |  
     | |     ___ | | | __ _| |_ 
     | |    / _ \\| | |/ _\` | __|
     | |___| (_) | | | (_| | |_ 
      \\_____\\___/|_|_|\\__,_|\\__|
      `,
      'font-family: monospace; color: #4ecdc4; font-size: 12px'
    );
  };