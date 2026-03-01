/**
 * Central re-export of all config. Prefer importing from specific modules
 * when only one group is needed (e.g. config/theme).
 */

export {
    PAGE_KEYS,
    BREAKPOINTS,
    Z_INDEX,
    APP_CONFIG
} from './app';

export { THEMES, ANIMATIONS } from './theme';

export { NAVIGATION_ITEMS, SOCIAL_LINKS } from './nav';

export { CONTACT_INFO, PORTFOLIO_PROJECTS } from './content';
