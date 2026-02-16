import { Box, Container, Typography, Grid, Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PoolIcon from '@mui/icons-material/Pool';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const LessonTypesCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(4),
    backgroundColor: 'white',
    height: '100%',
}));

const InfoSection = () => {
    return (
        <Box sx={{ py: 6, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" gutterBottom fontWeight="bold" color="primary.main">
                            How It Works
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We've made booking your swim lessons as easy as possible. Our real-time scheduling system allows you to:
                        </Typography>
                        <Stack spacing={2} sx={{ mb: 4 }}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <CalendarMonthIcon color="primary" fontSize="large" />
                                <Typography variant="body1">View live availability for all instructors.</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2}>
                                <PoolIcon color="primary" fontSize="large" />
                                <Typography variant="body1">Select from flexible spot bookings or structured courses.</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2}>
                                <EmojiEventsIcon color="primary" fontSize="large" />
                                <Typography variant="body1">Track progress and manage bookings online.</Typography>
                            </Box>
                        </Stack>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/lessons">
                            Learn More About Lessons
                        </Button>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <LessonTypesCard>
                            <Typography variant="h5" gutterBottom fontWeight="bold">
                                Lesson Types
                            </Typography>
                            <Box sx={{ mb: 3, mt: 3}}>
                                <Typography variant="h6" color="primary">Spot Private Bookings</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Flexible one-on-one sessions tailored to your specific needs. Perfect for technique refinement or extra practice whenever you need it.
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" color="primary">Small Group Courses</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Structured 4-6 week courses for small groups (2-3 students). Ideal for consistent progress and learning alongside peers.
                                </Typography>
                            </Box>
                        </LessonTypesCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InfoSection;
