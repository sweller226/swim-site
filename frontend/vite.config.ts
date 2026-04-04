import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import Prerenderer from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

import { HOMEPAGE_META } from './src/seo/pageMeta';
import { OG_IMAGE_PATH, SITE_NAME } from './src/seo/site';

function escAttr(v: string) {
  return v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

const ROUTES = ['/', '/lessons', '/faq', '/contact'];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL ?? '').trim().replace(/\/+$/, '');

  return {
    plugins: [
      react(),

      {
        name: 'inject-crawler-meta',
        transformIndexHtml(html) {
          const { title, description } = HOMEPAGE_META;
          let out = html
            .replace(/<title>[^<]*<\/title>/, `<title>${escAttr(title)}</title>`)
            .replace(
              /<meta\s+name="description"[^>]*\/>/,
              `<meta name="description" content="${escAttr(description)}" />`
            );

          if (!siteUrl) return out;

          const canonical = `${siteUrl}/`;
          const ogImage = `${siteUrl}${OG_IMAGE_PATH.startsWith('/') ? OG_IMAGE_PATH : `/${OG_IMAGE_PATH}`}`;

          return out.replace('</head>', `
<link rel="canonical" href="${escAttr(canonical)}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${escAttr(SITE_NAME)}" />
<meta property="og:title" content="${escAttr(title)}" />
<meta property="og:description" content="${escAttr(description)}" />
<meta property="og:url" content="${escAttr(canonical)}" />
<meta property="og:image" content="${escAttr(ogImage)}" />
<meta property="og:image:alt" content="${escAttr(SITE_NAME + ' logo')}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escAttr(title)}" />
<meta name="twitter:description" content="${escAttr(description)}" />
<meta name="twitter:image" content="${escAttr(ogImage)}" />
</head>`);
        },
      },

      Prerenderer({
        routes: ROUTES,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 2000,
        }),
      }),
    ],
  };
});