import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Instructor from '../components/Instructor';

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
            {/* <Instructor/> */}
        </>
    );
};

export default Home;
