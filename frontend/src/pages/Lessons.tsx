import { Container, Typography, Box, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import lessonsTemp from '../assets/lessonsTemp.jpg';

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
    padding: theme.spacing(5),
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

const LessonTypesSection = () => {
    return (
        <>
            <Typography variant="h3" component="h2" fontWeight="bold" color="primary.main" gutterBottom sx={{ mb: { xs: 2, md: 3 } }}>
                Lesson Types
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
                    {/* Private On-Site */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CourseCard
                            elevation={3}
                            sx={{
                                border: '2px solid',
                                borderColor: 'secondary.light',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 16,
                                    right: 16,
                                    bgcolor: 'secondary.main',
                                    color: 'common.white',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 10,
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Most popular
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <PersonIcon color="primary" fontSize="large" />
                                <Typography variant="h5" component="h2" fontWeight="bold">
                                    On-Site
                                </Typography>
                            </Box>
                            <PriceTag variant="h5">
                                $55 · 30 min &nbsp;|&nbsp; $72 · 45 min &nbsp;|&nbsp; $95 · 1 hr
                            </PriceTag>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                1–2 students (same client). Students must be age 6+. Lessons taught at our pool.
                            </Typography>
                            <List dense disablePadding sx={{ mb: 2 }}>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Request level you want us to teach. Supports an adaptable teaching style"/>
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Supports spot or scheduled booking"/>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="$20 per additional student (per class)"/>
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                                Book Now
                            </Button>
                        </CourseCard>
                    </Grid>

                    {/* Travel */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CourseCard elevation={2}>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <LocationOnIcon color="primary" fontSize="large" />
                                <Typography variant="h5" component="h2" fontWeight="bold">
                                    Travel
                                </Typography>
                            </Box>
                            <PriceTag variant="h5">
                                $90 · 45 min &nbsp;|&nbsp; $110 · 1 hr
                            </PriceTag>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                We come to teach at your pool. Students can be of any age.
                            </Typography>
                            <List dense disablePadding sx={{ mb: 2 }}>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Request the level you want us to teach. Supports an adaptable teaching style" />
                                </ListItem>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Supports spot or scheduled booking"/>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="$20 per additional student (per class)"/>
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                                Book Now
                            </Button>
                        </CourseCard>
                    </Grid>

                    {/* Renting */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CourseCard elevation={2}>
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <PoolIcon color="primary" fontSize="large" />
                                <Typography variant="h5" component="h2" fontWeight="bold">
                                    Pool Rental
                                </Typography>
                            </Box>
                            <PriceTag variant="h5">
                                $70/hr + $30/hr guard
                            </PriceTag>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Rent our pool. Minimum 1 hour.
                            </Typography>
                            <List dense disablePadding sx={{ mb: 2 }}>
                                <ListItem disablePadding sx={{ mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="1 guard, up to 10 people in the pool at a time" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Swimmers must be age 6+" />
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                                Book Now
                            </Button>
                        </CourseCard>
                    </Grid>
                </Grid>
        </>
    );
};

const BundlesSection = () => {
    return (
        <Grid container spacing={5} sx={{ mt: 10 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom color="primary.main" sx={{ mb: 2 }}>
                    Bundles & Deals
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Our bundles work like punch cards: you buy credits online and use them to book lessons. For any class type&mdash;on-site, travel, or renting&mdash;you can purchase a package of{' '}
                    <strong>six booking credits for the price of five</strong>.
                </Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <CheckCircleIcon color="secondary" fontSize="large" sx={{ mt: 0.5 }} />
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">6 credits for the price of 5</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buy a package of six online credits at the cost of five single bookings&mdash;best value when you plan multiple lessons.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <CheckCircleIcon color="secondary" fontSize="large" sx={{ mt: 0.5 }} />
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">Punch-card credits</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Each class booking uses one credit from your balance until the package is used up.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <CheckCircleIcon color="secondary" fontSize="large" sx={{ mt: 0.5 }} />
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">Buy &amp; book online</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Purchase credit packages and redeem them when you schedule through our online booking system.
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                    component="img"
                    src={lessonsTemp}
                    alt="Swimming lessons"
                    sx={{
                        width: '100%',
                        objectFit: 'cover',
                        aspectRatio: '4/3',
                        borderRadius: 2,
                    }}
                />
            </Grid>
        </Grid>
    );
};

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
                <LessonTypesSection />
                <BundlesSection />
            </Container>
        </Box>
    );
};

export default Lessons;
