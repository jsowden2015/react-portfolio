import { useState, useEffect } from 'react';
import { APP_CONFIG } from '../config/constants';

/**
 * Custom hook for loading state management
 * @returns {Object} Loading state and functions
 */
export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), APP_CONFIG.loadingDuration);
    const loadedTimer = setTimeout(() => setIsLoaded(true), APP_CONFIG.loadingDuration + 100);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(loadedTimer);
    };
  }, []);
  
  return {
    isLoading,
    isLoaded,
    setIsLoading,
    setIsLoaded
  };
};
