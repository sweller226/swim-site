import { useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import faq1 from '../assets/faq1.jpg';
import faq2 from '../assets/faq2.jpg';

const PageHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10, 0, 6, 0),
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));

const faqs = [
    {
        question: 'What ages do you teach?',
        answer: 'We offer lessons for all ages, from toddlers (with parent in the water) through adults. Our instructors tailor the approach to each swimmer\'s age and comfort level.',
    },
    {
        question: 'Do I need to bring anything?',
        answer: 'Please bring a swimsuit and towel. Goggles are optional but recommended. We provide any teaching aids needed for the lesson.',
    },
    {
        question: 'How do I book or reschedule a lesson?',
        answer: 'You can book and manage lessons through our online scheduling system on the Lessons page. For reschedules or cancellations, please do so at least 24 hours in advance when possible.',
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We ask for at least 24 hours notice for cancellations or reschedules. Late cancellations may be subject to a fee. For questions about specific bookings, contact Bookeo support.',
    },
    {
        question: 'Where are lessons held?',
        answer: 'Lessons take place at our pool facility. The exact address and any access details will be confirmed when you book.',
    },
    {
        question: 'Are your instructors certified?',
        answer: 'Yes. Our instructors are experienced, certified, and fully insured. We prioritize safety and a positive, encouraging environment in every lesson.',
    },
];

const FAQ = () => {
    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange = (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? index : false);
    };

    return (
        <Box sx={{ pb: 8 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h5" color="inherit" sx={{ opacity: 0.95 }}>
                        Quick answers to common questions about our swim lessons.
                    </Typography>
                </Container>
            </PageHeader>

            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                            }}
                        >
                            {faqs.map((faq, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === index}
                                    onChange={handleChange(index)}
                                    sx={{
                                        '&:before': { display: 'none' },
                                        boxShadow: 'none',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 1,
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography fontWeight={600} color="text.primary">
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={faq1}
                                alt="Swimming lesson"
                                sx={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    aspectRatio: '4/3',
                                    borderRadius: 2,
                                }}
                            />
                            <Box
                                component="img"
                                src={faq2}
                                alt="Swimming lesson"
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
};

export default FAQ;
