'use client';

import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import NextLink from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const InfoSection = () => {
    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 8, md: 6 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" color="primary.main">
                            What We Offer
                        </Typography>
                        <Typography variant="body1" paragraph>
                            From Private On-Site lessons at our pool to lessons at yours, we provide flexible options to fit your goals.
                        </Typography>
                        <Stack spacing={2} sx={{ mb: 4 }}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PersonIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Private On-Site
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        30-min, 45-min, or 1hr sessions for 1–2 students. Request what level you want us to teach. Supports an adaptable teaching style. Add an additional student for a small fee.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <LocationOnIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Travel to You
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        We come to your pool, 45 min or 1hr. Ideal if you have a pool at home and want instruction there.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PoolIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Pool Rental
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Rent our pool by the hour. One guard, up to 10 people in the pool at a time. Perfect for parties, practice, or gatherings.
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        <Button
                            component={NextLink}
                            href="/lessons"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            View Lessons &amp; Pricing
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" color="primary.main">
                            How It Works
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Simple, clear lessons in a comfortable backyard setting, led by experienced instructors and booked online.
                        </Typography>
                        <Stack spacing={2}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PoolIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Well-Maintained Backyard Pool
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lessons run in a fully-equipped, backyard pool that&apos;s kept comfortable for swimmers of all ages. Located near Steeles and Bathurst in North York.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PersonIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Experienced Instructors
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Every instructor brings at least two years of experience teaching with the City, along with strong private‑lesson expertise for swimmers of all ages.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <LocationOnIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" component="h3" fontWeight="bold">
                                        Online Booking with Bookeo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Booking is handled through our online system, Bookeo, where you can see available times and manage your schedule.
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InfoSection;
