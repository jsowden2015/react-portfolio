/**
 * Theme and animation configuration.
 */

export const THEMES = {
    light: {
        primary: '#667eea',
        secondary: '#764ba2',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        surface: 'rgba(255, 255, 255, 0.95)',
        text: '#2c3e50',
        textLight: '#ffffff',
        shadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        border: 'rgba(255, 255, 255, 0.2)'
    },
    dark: {
        primary: '#667eea',
        secondary: '#764ba2',
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        surface: 'rgba(26, 32, 44, 0.95)',
        text: '#f7fafc',
        textLight: '#ffffff',
        shadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        border: 'rgba(255, 255, 255, 0.15)'
    }
};

export const ANIMATIONS = {
    fadeIn: {
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s ease-out forwards'
    },
    slideIn: {
        opacity: 0,
        transform: 'translateX(-30px)',
        animation: 'slideInLeft 0.6s ease-out forwards'
    },
    pulse: {
        animation: 'pulse 2s infinite'
    }
};
