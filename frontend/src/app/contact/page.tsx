import type { Metadata } from 'next';
import { CONTACT_META } from '../../seo/pageMeta';

import { Container, Typography, Box, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import PageHeader from '../../components/PageHeader';
import Wave from '../../components/Wave';

export const metadata: Metadata = {
    title: CONTACT_META.title,
    description: CONTACT_META.description,
};

const Contact = () => {
    return (
        <Box sx={{ pb: 2 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Contact Us
                    </Typography>
                    <Typography variant="h5" component="p" color="inherit" sx={{ opacity: 0.95 }}>
                        Get in touch with any questions about our swim lessons.
                    </Typography>
                </Container>
                <Wave height={180} bottom style={{ zIndex: 2 }} />
            </PageHeader>

            <Container maxWidth="lg" sx={{ mt: -2 }}>
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start" sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" component="h2" sx={{ display: 'block', mb: 2, color: 'primary.main' }}>
                            For any questions
                        </Typography>
                        <Typography variant="h6" component="p" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                            Please contact us directly
                            by email or phone. We&apos;re happy to help you adjust your schedule or answer any other questions about lessons.
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <EmailIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Email
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="mailto:contact@daveswimschool.ca"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        contact@daveswimschool.ca
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PhoneIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        Phone
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="tel:6477464644"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': { color: 'primary.main' },
                                        }}
                                    >
                                        647 746-4644
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <FacebookIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Facebook
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="https://facebook.com/daveswimschool"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        facebook.com/daveswimschool
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <InstagramIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Instagram
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="https://instagram.com/daveswimschool"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            '&:hover': { textDecoration: 'underline' },
                                        }}
                                    >
                                        @daveswimschool
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            component="img"
                            src="/Logo-Big-nobg.png"
                            alt="Dave's Swim School logo"
                            sx={{
                                width: '100%',
                                objectFit: 'contain',
                                maxHeight: 420,
                                borderRadius: 2,
                                mt: { xs: 4, md: 0 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;