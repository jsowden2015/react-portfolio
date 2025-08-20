import React, { useState } from 'react';
import { createButtonStyles } from '../../utils/helpers';

/**
 * Reusable Button component
 * @param {Object} props - Component props
 * @param {string} props.children - Button content
 * @param {Object} props.theme - Current theme
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @returns {JSX.Element} Button component
 */
const Button = ({ 
  children, 
  theme, 
  onClick, 
  disabled = false, 
  className = '', 
  style = {} 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonStyles = {
    ...createButtonStyles(theme, isHovered, disabled),
    ...style
  };
  
  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
