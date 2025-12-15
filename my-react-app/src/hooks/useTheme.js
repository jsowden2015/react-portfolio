import { useState, useEffect } from 'react';
import { THEMES, APP_CONFIG } from '../config/constants';

/**
 * Custom hook for theme management
 * @returns {Object} Theme state and functions
 */
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(APP_CONFIG.defaultTheme);
  
  const theme = THEMES[currentTheme];
  
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
  
  return {
    currentTheme,
    theme,
    toggleTheme,
    setCurrentTheme
  };
};
