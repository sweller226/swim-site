import type { Metadata } from 'next';
import { LESSONS_META } from '../../seo/pageMeta';
import LessonsContent from './LessonsContent';

export const metadata: Metadata = {
    title: LESSONS_META.title,
    description: LESSONS_META.description,
};

export default function LessonsPage() {
    return <LessonsContent />;
}