import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const InfoSection = () => {
    return (
        <Box sx={{ py: 6, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" gutterBottom fontWeight="bold" color="primary.main">
                            What We Offer
                        </Typography>
                        <Typography variant="body1" paragraph>
                            From private instruction at our pool to lessons at yours—we provide flexible options to fit your schedule and goals.
                        </Typography>
                        <Stack spacing={2} sx={{ mb: 4 }}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PersonIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Private Classes</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        30-min or 1hr sessions for 1–2 students. Choose your level, book spot or scheduled. Add an additional student for a small fee.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <LocationOnIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Travel to You</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        We come to your pool—45 min or 1hr. Ideal if you have a pool at home and want instruction on your schedule.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PoolIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Pool Rental</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Rent our pool by the hour. One guard, up to 10 people in the pool at a time. Perfect for parties, practice, or gatherings.
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/lessons">
                            View Lessons &amp; Pricing
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" gutterBottom fontWeight="bold" color="primary.main">
                            How It Works
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Simple, clear lessons in a comfortable backyard setting, led by experienced instructors and booked online.
                        </Typography>
                        <Stack spacing={2}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PoolIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Well-Maintained Backyard Pool</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lessons run in a clean, well-maintained backyard pool that&apos;s kept comfortable for swimmers of all ages.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PersonIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Experienced Instructors</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Every instructor has at least 2 years of experience working in the City, with a strong focus on safety and progress.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <LocationOnIcon color="primary" fontSize="large" sx={{ mt: 0.5 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">Online Booking with Bookeo</Typography>
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
