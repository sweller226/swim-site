import type { Metadata } from 'next';
import { getPageMeta } from '../../seo/pageMeta';
import FAQContent from './FAQContent';

export const metadata: Metadata = getPageMeta('/faq');

export default function FAQPage() {
    return <FAQContent />;
}