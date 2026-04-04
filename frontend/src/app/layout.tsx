import type { Metadata } from 'next';
import ThemeRegistry from '../components/ThemeRegistry';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import { HOMEPAGE_META } from '../seo/pageMeta';
import { OG_IMAGE_PATH, SITE_NAME, getSiteUrl } from '../seo/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: HOMEPAGE_META.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOMEPAGE_META.description,
  ...(siteUrl && {
    metadataBase: new URL(siteUrl),
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE_PATH, alt: `${SITE_NAME} logo` }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}