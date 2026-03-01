/**
 * App-wide constants: page keys, breakpoints, z-index, app config.
 */

export const PAGE_KEYS = {
    PORTFOLIO: 'portfolio',
    ABOUT: 'about',
    CONTACT: 'contact'
};

export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 736,
    DESKTOP: 980,
    LARGE_DESKTOP: 1280,
    XL_DESKTOP: 1680
};

export const Z_INDEX = {
    BASE: 1,
    HEADER: 2,
    MOBILE_MENU: 99999,
    MOBILE_TOGGLE: 100000,
    NOTIFICATION: 10000
};

export const APP_CONFIG = {
    defaultPage: PAGE_KEYS.PORTFOLIO,
    defaultTheme: 'light',
    loadingDuration: 2000,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};
