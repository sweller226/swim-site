import type { Metadata } from 'next';
import { getPageMeta } from '../../seo/pageMeta';
import LessonsContent from './LessonsContent.tsx';

export const metadata: Metadata = getPageMeta('/lessons');

export default function LessonsPage() {
    return <LessonsContent />;
}