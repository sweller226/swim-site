import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
// import InstructorList from '../components/InstructorList';
// import Testimonials from '../components/Testimonials';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === '#instructors') {
            const el = document.getElementById('instructors');
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <InfoSection />
            {/* <InstructorList /> */}
            {/* <Testimonials /> */}
        </>
    );
};

export default Home;
