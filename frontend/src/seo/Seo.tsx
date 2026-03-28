import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMeta } from './pageMeta';
import { SITE_NAME, getAbsoluteOgImageUrl, getCanonicalUrl, getOgImagePath, getSiteUrl } from './site';

const Seo = () => {
    const { pathname } = useLocation();
    const { title, description } = getPageMeta(pathname);
    const siteUrl = getSiteUrl();

    const canonicalUrl = siteUrl ? getCanonicalUrl(siteUrl, pathname) : null;
    const ogImageUrl = siteUrl ? getAbsoluteOgImageUrl(siteUrl, getOgImagePath()) : null;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
            {ogImageUrl ? <meta property="og:image" content={ogImageUrl} /> : null}
            {ogImageUrl ? (
                <meta property="og:image:alt" content={`${SITE_NAME} logo`} />
            ) : null}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}
        </Helmet>
    );
};

export default Seo;
