import { Container, Typography, Box, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';

const PageHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10, 0, 6, 0),
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));

const PriceTag = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
}));

const CourseCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[4],
    },
}));

const Lessons = () => {
    return (
        <Box sx={{ pb: 8 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Our Lesson Programs
                    </Typography>
                    <Typography variant="h5" color="inherit">
                        Choose the learning style that fits your goals and schedule.
                    </Typography>
                </Container>
            </PageHeader>

            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Spot Private Bookings */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <CourseCard elevation={2}>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <PersonIcon color="primary" fontSize="large" />
                                <Typography variant="h4" component="h2" fontWeight="bold">
                                    Spot Private Bookings
                                </Typography>
                            </Box>

                            <PriceTag variant="h5">
                                $60 / 30-min session
                            </PriceTag>

                            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
                                Flexible, one-on-one instruction tailored completely to your needs. Perfect for busy schedules or focusing on specific skills.
                            </Typography>

                            <Divider sx={{ mb: 3 }} />

                            <Typography variant="h6" gutterBottom fontWeight="bold">
                                Perfect For:
                            </Typography>
                            <List sx={{ mb: 'auto' }}>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Refining specific strokes or techniques" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Overcoming fear of water" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Flexible scheduling (week-to-week)" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Adult learners wanting private space" />
                                </ListItem>
                            </List>

                            <Button variant="contained" size="large" fullWidth sx={{ mt: 4 }}>
                                Book a Spot Session
                            </Button>
                        </CourseCard>
                    </Grid>

                    {/* Small Group Courses */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <CourseCard elevation={2} sx={{ border: '2px solid', borderColor: 'secondary.light' }}>
                            <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: 'secondary.main', color: 'white', px: 2, py: 0.5, borderRadius: 4, fontWeight: 'bold', fontSize: '0.875rem' }}>
                                POPULAR
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <GroupsIcon color="primary" fontSize="large" />
                                <Typography variant="h4" component="h2" fontWeight="bold">
                                    Small Group Courses
                                </Typography>
                            </Box>

                            <PriceTag variant="h5">
                                $200 / 6-week module
                            </PriceTag>

                            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
                                Structured curriculum in a social setting. Small groups ensure quality attention while students learn from watching peers.
                            </Typography>

                            <Divider sx={{ mb: 3 }} />

                            <Typography variant="h6" gutterBottom fontWeight="bold">
                                Course Highlights:
                            </Typography>
                            <List sx={{ mb: 'auto' }}>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <StarIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Consistent weekly progress" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <StarIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Small class sizes (Max 3 students)" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <StarIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary=" structured curriculum levels" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <StarIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="End-of-course certificate" />
                                </ListItem>
                            </List>

                            <Button variant="contained" color="secondary" size="large" fullWidth sx={{ mt: 4 }}>
                                View Course Schedule
                            </Button>
                        </CourseCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Lessons;
