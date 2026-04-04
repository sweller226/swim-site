'use client';

import { useState, type ReactNode } from 'react';
import {
    Container,
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Wave from '../../components/Wave';
import PageHeader from '../../components/PageHeader';

const faqs: { question: string; answer: string | ReactNode }[] = [
    {
        question: 'What ages do you teach?',
        answer: 'We offer private on-site lessons and pool rental for swimmers ages 6 and up, and any age group for travel lessons.',
    },
    {
        question: 'Do I need to bring anything?',
        answer: 'Please bring a swimsuit and towel. Goggles are optional but recommended. We provide any teaching aids needed for the lesson.',
    },
    {
        question: 'How do I book or reschedule a lesson?',
        answer: (
            <>
                You can book and manage lessons through our{' '}
                <Link
                    href="https://bookeo.com/daveswimschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="always"
                    sx={{ color: 'inherit', fontWeight: 500 }}
                >
                    online booking system, Bookeo
                </Link>
                . For reschedules or cancellations, please do so at least 24 hours in advance.
            </>
        ),
    },
    {
        question: 'What is your cancellation policy for non-bundle lessons?',
        answer: 'We ask for at least 24 hours notice for cancellations or reschedules. For questions about specific bookings, contact us directly.',
    },
    {
        question: 'What is your cancellation policy for bundles?',
        answer: 'The 6-lesson package is sold as a bundle. If a refund is requested, the free first lesson is void, completed lessons will be charged at full price, and any remaining lessons will be refunded. To request a refund, please call us directly.',
    },
    {
        question: 'Where are lessons held?',
        answer: 'Lessons take place at our fully-equipped backyard pool facility, at 66 Stonedene Blvd in North York. Access details will be confirmed when you book. If you have a pool at home, we can come to you for travel lessons.',
    },
    {
        question: 'Are your instructors certified?',
        answer: 'Yes. Our instructors are experienced professionals who have worked with the City of Toronto or Vaughan Parks and Recreation. All are certified through the Lifesaving Society, with qualifications including Swim Instructor, Emergency First Aid with CPR C, Lifesaving Instructor, and National Lifeguard.',
    },
    {
        question: 'Are your lessons suitable for everyone?',
        answer: "Absolutely. Our lessons are private, inclusive, and fully tailored to each swimmer's needs. Whether you're a nervous beginner, have a learning difference, a physical disability, or want to refine a specific skill.",
    },
];

export default function FAQContent() {
    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange = (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? index : false);
    };

    return (
        <Box sx={{ pb: 2 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h5" component="p" color="inherit" sx={{ opacity: 0.95 }}>
                        Quick answers to common questions about our swim lessons.
                    </Typography>
                </Container>
                <Wave height={180} bottom style={{ zIndex: 2 }} />
            </PageHeader>

            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 6 }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {faqs.map((faq, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === index}
                                    onChange={handleChange(index)}
                                    sx={{
                                        '&:before': { display: 'none' },
                                        borderRadius: 2,
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                                        background: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'rgba(0,0,0,0.10)',
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography component="span" variant="subtitle1" fontWeight={600} color="text.primary" sx={{ m: 0, width: '100%' }}>
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.primary" sx={{ lineHeight: 1.7 }}>
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            sx={{
                                position: { xs: 'static', md: 'sticky' },
                                top: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                mt: { xs: 4, md: 0 },
                            }}
                        >
                            <Box
                                component="img"
                                src="/faq1.jpg"
                                alt="Young swimmer with an adult instructor during a one-on-one lesson in the pool"
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    aspectRatio: '4/3',
                                    borderRadius: 2,
                                }}
                            />
                            <Box
                                component="img"
                                src="/faq2.webp"
                                alt="Swim instructor supporting a child at the edge of the pool during practice"
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    aspectRatio: '4/3',
                                    borderRadius: 2,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}