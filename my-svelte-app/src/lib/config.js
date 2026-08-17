/** Mirrors my-react-app/src/config (app, nav, theme, content). */

export const PAGE_KEYS = {
  PORTFOLIO: 'portfolio',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 736,
  DESKTOP: 980,
  LARGE_DESKTOP: 1280,
  XL_DESKTOP: 1680,
};

export const Z_INDEX = {
  BASE: 1,
  HEADER: 2,
  MOBILE_MENU: 99999,
  MOBILE_TOGGLE: 100000,
  NOTIFICATION: 10000,
};

export const APP_CONFIG = {
  defaultPage: PAGE_KEYS.PORTFOLIO,
  defaultTheme: 'light',
  loadingDuration: 2000,
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

export const NAVIGATION_ITEMS = [
  { key: PAGE_KEYS.PORTFOLIO, label: 'Portfolio' },
  { key: PAGE_KEYS.ABOUT, label: 'About Me' },
  { key: PAGE_KEYS.CONTACT, label: 'Contact' },
];

export const SOCIAL_LINKS = [
  {
    icon: 'fa-linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justin-sowden-361005184/',
  },
  {
    icon: 'fa-github',
    label: 'GitHub',
    href: 'https://github.com/jsowden2015',
  },
  {
    icon: 'fa-envelope',
    label: 'Email',
    href: 'mailto:hello@justinsowden.com',
  },
];

export const THEMES = {
  light: {
    primary: '#667eea',
    secondary: '#764ba2',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    surface: 'rgba(255, 255, 255, 0.95)',
    text: '#2c3e50',
    textLight: '#ffffff',
    shadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: 'rgba(255, 255, 255, 0.2)',
  },
  dark: {
    primary: '#667eea',
    secondary: '#764ba2',
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
    surface: 'rgba(26, 32, 44, 0.95)',
    text: '#f7fafc',
    textLight: '#ffffff',
    shadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    border: 'rgba(255, 255, 255, 0.15)',
  },
};

export const ANIMATIONS = {
  fadeIn: {
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 0.8s ease-out forwards',
  },
  slideIn: {
    opacity: 0,
    transform: 'translateX(-30px)',
    animation: 'slideInLeft 0.6s ease-out forwards',
  },
  pulse: {
    animation: 'pulse 2s infinite',
  },
};

export const PORTFOLIO_PROJECTS = [
  {
    date: 'Web Development',
    title: 'JustShare\nFile Sharing Platform',
    image: 'images/just-share.jpg',
    description:
      'A modern file sharing application built with React, TypeScript, and Vite. Demonstrates growth engineering principles, monetization strategies, and full-stack development skills. Features include sign-up flow, trial conversion, dashboard with file management, storage tracking, and premium upsell flow.',
    repoUrl: 'https://github.com/jsowden2015/JustShare',
  },
  {
    date: 'UI/UX Design',
    title: 'ParkPay\nParking Payment App',
    image: 'images/parkpay-mobile-app.jpg',
    description:
      'A comprehensive UX/UI design project for Google UX Certification. Multi-platform parking ticket payment application with iOS mobile app and responsive desktop web app. Features streamlined four-step process (lookup, review, payment, confirmation) with progress indicators, plus complete design system and design documentation.',
    repoUrl: 'https://github.com/jsowden2015/Parkingticketpaymentdesign',
  },
  {
    date: 'Frontend Development',
    title: 'JustStream\nWebApp',
    image: 'images/just-stream.jpg',
    description:
      'A modern, full-featured streaming service dashboard built with React, TypeScript, and Redux Toolkit. Features infinite scrolling, lazy loading, video player integration, code splitting, error handling, and CI/CD pipeline setup.',
    repoUrl: 'https://github.com/jsowden2015/JustStream',
  },
  {
    date: 'Full Stack Development',
    title: 'JustChat\nApplication',
    image: 'images/just-chat.jpg',
    description:
      'A modern, real-time chat application built with React, Firebase, and Redux. Features real-time messaging with typing indicators and reactions, Google authentication, rich messaging (images, emojis, mentions, message editing), voice channels with mic controls, member presence tracking, and browser notifications. Discord-inspired UI built for learning and portfolio demonstration.',
    repoUrl: 'https://github.com/jsowden2015/react-firebase-chat-demo',
  },
  {
    date: 'Coming Soon',
    title: 'Coming Soon',
    image: 'images/pic06.jpg',
    description: 'More exciting projects are on the way. Stay tuned!',
  },
  {
    date: 'Coming Soon',
    title: 'Coming Soon',
    image: 'images/pic07.jpg',
    description: 'More exciting projects are on the way. Stay tuned!',
  },
];
