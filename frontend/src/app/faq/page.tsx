import type { Metadata } from 'next';
import { FAQ_META } from '../../seo/pageMeta';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
    title: FAQ_META.title,
    description: FAQ_META.description,
};

export default function FAQPage() {
    return <FAQContent />;
}