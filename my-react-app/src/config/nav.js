/**
 * Navigation and social link configuration.
 */

import { PAGE_KEYS } from './app';

export const NAVIGATION_ITEMS = [
    { key: PAGE_KEYS.PORTFOLIO, label: 'Portfolio' },
    { key: PAGE_KEYS.ABOUT, label: 'About Me' },
    { key: PAGE_KEYS.CONTACT, label: 'Contact' }
];

export const SOCIAL_LINKS = [
    { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-sowden-361005184/' },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/jsowden2015' },
    { icon: 'fa-envelope', label: 'Email', href: 'mailto:hello@justinsowden.com' }
];
