import { PAGE_KEYS } from '../config/app';

const VALID_PAGES = new Set(Object.values(PAGE_KEYS));

/** Fragments that target elements, not app pages (e.g. skip link). */
const NON_PAGE_HASHES = new Set(['main']);

/**
 * Resolve a location hash to a page key.
 * Returns null for empty hashes, in-page targets (#main), or unknown keys.
 */
export const pageFromHash = (hash = window.location.hash) => {
  const key = hash.replace(/^#/, '').toLowerCase();

  if (!key || NON_PAGE_HASHES.has(key) || !VALID_PAGES.has(key)) {
    return null;
  }

  return key;
};

export const isPageHashTarget = (hash = window.location.hash) => {
  const key = hash.replace(/^#/, '').toLowerCase();
  return NON_PAGE_HASHES.has(key);
};

export const isValidPage = (page) => VALID_PAGES.has(page);

export const hashForPage = (page) => `#${page}`;
