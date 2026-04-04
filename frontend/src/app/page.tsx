import type { Metadata } from 'next';
import { getPageMeta } from '../seo/pageMeta';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import InstructorTestBig from '../components/InstructorTestBig';

export const metadata: Metadata = getPageMeta('/');

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