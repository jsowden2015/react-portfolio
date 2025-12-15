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
  { key: 'elements', label: 'Projects' },
  { key: 'contact', label: 'Contact' }
];

// Social media links
export const SOCIAL_LINKS = [
  { icon: 'fa-twitter', label: 'Twitter', href: 'https://twitter.com/justinsowden' },
  { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/justin-sowden' },
  { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/justinsowden' },
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
    title: 'JustShare\nLanding Page',
    image: '/images/just-share.jpg',
    description: 'JustShare - Secure file sharing landing page built with React. Features modern design with secure file sharing, fast upload/download speeds, and real-time collaboration capabilities.'
  },
  {
    date: 'UI/UX Design',
    title: 'ParkPay\nMobile App',
    image: '/images/parkpay-mobile-app.jpg',
    description: 'ParkPay mobile application interface for paying parking tickets. Features intuitive step-by-step process, ticket and license plate search, and seamless payment flow.'
  },
  {
    date: 'Full Stack',
    title: 'E-commerce\nPlatform',
    image: '/images/pic04.jpg',
    description: 'Complete e-commerce solution with payment processing, inventory management, and responsive design.'
  },
  {
    date: 'Creative Design',
    title: 'Brand Identity\nPackage',
    image: '/images/pic05.jpg',
    description: 'Comprehensive brand development including logo design, color schemes, and marketing materials.'
  },
  {
    date: 'Backend Development',
    title: 'API Development\n& Integration',
    image: '/images/pic06.jpg',
    description: 'Robust backend systems with RESTful APIs, database design, and third-party service integration.'
  },
  {
    date: 'Frontend Development',
    title: 'Interactive\nWeb Applications',
    image: '/images/pic07.jpg',
    description: 'Dynamic web applications with modern JavaScript frameworks and responsive design principles.'
  }
];

// App configuration
export const APP_CONFIG = {
  defaultPage: 'portfolio',
  defaultTheme: 'light',
  loadingDuration: 2000,
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};
