/// <reference types="vite/client" />

/**
 * Production site origin, no trailing slash (e.g. https://daveswimschool.ca).
 * Set VITE_SITE_URL in `.env` / Netlify env for canonical, Open Graph, and Twitter URLs.
 */
export function getSiteUrl(): string {
    const raw = import.meta.env.VITE_SITE_URL;
    if (raw == null || !String(raw).trim()) {
        return '';
    }
    return String(raw).trim().replace(/\/+$/, '');
}

/** Open Graph / Twitter preview image — file in `public/`. */
export const OG_IMAGE_PATH = '/Logo-Big.png';

export const SITE_NAME = "Dave's Swim School";

/**
 * Absolute page URL for canonical / og:url (trailing slash only on root).
 */
export function getCanonicalUrl(siteUrl: string, pathname: string): string {
    let path = pathname.trim();

    // Ensure leading slash
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }

    // Remove trailing slash except for root
    if (path !== '/') {
        path = path.replace(/\/+$/, '');
    }

    return `${siteUrl}${path}`;
}

export function getAbsoluteOgImageUrl(siteUrl: string, imagePath: string): string {
    const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${siteUrl}${path}`;
}
