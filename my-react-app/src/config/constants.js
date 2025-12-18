// Theme configurations
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
    primary: '#2c3e50',
    secondary: '#34495e',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    surface: 'rgba(44, 62, 80, 0.95)',
    text: '#ecf0f1',
    textLight: '#ffffff',
    shadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    border: 'rgba(255, 255, 255, 0.1)'
  }
};

// Animation configurations
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

// Navigation configuration
export const NAVIGATION_ITEMS = [
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'generic', label: 'About Me' },
  { key: 'contact', label: 'Contact' }
];

// Social media links
export const SOCIAL_LINKS = [
  { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-sowden-361005184/' },
  { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/jsowden2015' },
  { icon: 'fa-envelope', label: 'Email', href: 'mailto:justin@example.com' }
];

// Contact information
export const CONTACT_INFO = [
  {
    title: 'Address',
    content: '1234 Somewhere Road #87257\nNashville, TN 00000-0000'
  },
  {
    title: 'Phone',
    content: '(000) 000-0000',
    isLink: true
  },
  {
    title: 'Email',
    content: 'info@untitled.tld',
    isLink: true
  }
];

// Portfolio projects data
export const PORTFOLIO_PROJECTS = [
  {
    date: 'Web Development',
    title: 'JustShare\nFile Sharing Platform',
    image: '/images/just-share.jpg',
    description: 'A modern file sharing application built with React, TypeScript, and Vite. Demonstrates growth engineering principles, monetization strategies, and full-stack development skills. Features include sign-up flow, trial conversion, dashboard with file management, storage tracking, and premium upsell flow.'
  },
  {
    date: 'UI/UX Design',
    title: 'ParkPay\nParking Payment App',
    image: '/images/parkpay-mobile-app.jpg',
    description: 'A comprehensive UX/UI design project for Google UX Certification. Multi-platform parking ticket payment application with iOS mobile app and responsive desktop web app. Features streamlined four-step process (lookup, review, payment, confirmation) with progress indicators, plus complete design system and design documentation.'
  },
  {
    date: 'Frontend Development',
    title: 'JustStream\nWebApp',
    image: '/images/just-stream.jpg',
    description: 'A modern, full-featured streaming service dashboard built with React, TypeScript, and Redux Toolkit. Features infinite scrolling, lazy loading, video player integration, code splitting, error handling, and CI/CD pipeline setup.'
  },
  {
    date: 'Full Stack Development',
    title: 'JustChat\nApplication',
    image: '/images/just-chat.jpg',
    description: 'A modern, real-time chat application built with React, Firebase, and Redux. Features real-time messaging with typing indicators and reactions, Google authentication, rich messaging (images, emojis, mentions, message editing), voice channels with mic controls, member presence tracking, and browser notifications. Discord-inspired UI built for learning and portfolio demonstration.'
  },
  {
    date: 'Coming Soon',
    title: 'Coming Soon',
    image: '/images/pic06.jpg',
    description: 'More exciting projects are on the way. Stay tuned!'
  },
  {
    date: 'Coming Soon',
    title: 'Coming Soon',
    image: '/images/pic07.jpg',
    description: 'More exciting projects are on the way. Stay tuned!'
  }
];

// App configuration
export const APP_CONFIG = {
  defaultPage: 'portfolio',
  defaultTheme: 'light',
  loadingDuration: 2000,
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};
