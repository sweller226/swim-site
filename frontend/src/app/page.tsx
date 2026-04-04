import type { Metadata } from 'next';
import { HOMEPAGE_META } from '../seo/pageMeta';

import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import InstructorTestBig from '../components/InstructorTestBig';

export const metadata: Metadata = {
    title: HOMEPAGE_META.title,
    description: HOMEPAGE_META.description,
};

const Home = () => {
    return (
        <>
            <Hero />
            <InfoSection />
            <InstructorTestBig />
        </>
    );
};

export default Home;