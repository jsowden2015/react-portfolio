// Utility functions for common operations

/**
 * Get image URL with proper public path
 * @param {string} imagePath - Path to image relative to public folder
 * @returns {string} Full image URL
 */
export const getImageUrl = (imagePath) => {
  return process.env.PUBLIC_URL + imagePath;
};

/**
 * Create CSS keyframes for animations
 * @returns {void}
 */
export const injectKeyframes = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideInLeft {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
};

/**
 * Set background images dynamically
 * @returns {void}
 */
export const setBackgroundImages = () => {
  const bgElement = document.querySelector('#wrapper > .bg');
  if (bgElement) {
    const overlayUrl = getImageUrl('/images/overlay.png');
    const bgUrl = getImageUrl('/images/bg.jpg');
    bgElement.style.backgroundImage = `url("${overlayUrl}"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${bgUrl}")`;
  }
};

/**
 * Create common button styles
 * @param {Object} theme - Current theme object
 * @param {boolean} isHovered - Hover state
 * @param {boolean} isDisabled - Disabled state
 * @returns {Object} Button styles object
 */
export const createButtonStyles = (theme, isHovered = false, isDisabled = false) => ({
  padding: '1rem 2rem',
  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
  color: theme.textLight,
  border: 'none',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
  boxShadow: isHovered ? theme.shadow : '0 4px 15px rgba(0, 0, 0, 0.2)',
  opacity: isDisabled ? 0.7 : 1
});

/**
 * Create common input styles
 * @param {Object} theme - Current theme object
 * @returns {Object} Input styles object
 */
export const createInputStyles = (theme) => ({
  padding: '0.75rem 1rem',
  border: `1px solid ${theme.border}`,
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.text,
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
});

/**
 * Create common card styles
 * @param {Object} theme - Current theme object
 * @param {boolean} isHovered - Hover state
 * @returns {Object} Card styles object
 */
export const createCardStyles = (theme, isHovered = false) => ({
  padding: '2rem',
  background: `rgba(255, 255, 255, 0.05)`,
  borderRadius: '15px',
  margin: '1rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
  boxShadow: isHovered ? theme.shadow : '0 5px 20px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${theme.border}`,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
});

/**
 * Format animation delay based on index
 * @param {number} baseDelay - Base delay in seconds
 * @param {number} index - Component index
 * @param {number} increment - Increment per item
 * @returns {string} Formatted animation delay
 */
export const getAnimationDelay = (baseDelay, index = 0, increment = 0.1) => {
  return `${baseDelay + (index * increment)}s`;
};

/**
 * Get responsive font size using clamp
 * @param {number} minSize - Minimum font size in rem
 * @param {number} preferredSize - Preferred font size in vw
 * @param {number} maxSize - Maximum font size in rem
 * @returns {string} Clamp function string
 */
export const getResponsiveFontSize = (minSize, preferredSize, maxSize) => {
  return `clamp(${minSize}rem, ${preferredSize}vw, ${maxSize}rem)`;
};

/**
 * Get responsive spacing using clamp
 * @param {number} minSize - Minimum spacing in rem
 * @param {number} preferredSize - Preferred spacing in vw
 * @param {number} maxSize - Maximum spacing in rem
 * @returns {string} Clamp function string
 */
export const getResponsiveSpacing = (minSize, preferredSize, maxSize) => {
  return `clamp(${minSize}rem, ${preferredSize}vw, ${maxSize}rem)`;
};

/**
 * Get responsive container width
 * @param {number} maxWidth - Maximum width in px
 * @returns {string} Responsive width string
 */
export const getResponsiveWidth = (maxWidth = 1200) => {
  return `min(90vw, ${maxWidth}px)`;
};
