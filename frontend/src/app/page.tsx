import type { Metadata } from 'next';
import { HOMEPAGE_META } from '../seo/pageMeta';

import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import InstructorTestBig from '../components/InstructorTestBig';
import PromoSection from '../components/Promotion';
import LessonTypes from '../components/LessonsTypes';

import { Box } from '@mui/material';

export const metadata: Metadata = {
    title: HOMEPAGE_META.title,
    description: HOMEPAGE_META.description,
};

const Home = () => {
  return (
    <>
        <Hero />
        <Box display="flex" flexDirection="column" gap={10}>
            <InfoSection />
            <PromoSection />
            <LessonTypes />
            <InstructorTestBig />
        </Box>
    </>
  );
};

export default Home;