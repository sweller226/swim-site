import {
    Container,
    Typography,
    Box,
    Grid,
    Paper,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Stack,
    type BoxProps,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { styled } from '@mui/material/styles';
import Wave from '../components/Wave';
import PageHeader from '../components/PageHeader';

const PriceTag = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
})) as typeof Typography;

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
    
const mostPopularTagBaseSx = {
    position: 'absolute' as const,
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
    textTransform: 'uppercase' as const,
};

const MostPopularTag = ({ sx, children = 'Very Popular', ...props }: BoxProps) => (
    <Box
        {...props}
        sx={[mostPopularTagBaseSx, ...(sx ? (Array.isArray(sx) ? sx : [sx]) : [])]}
    >
        {children}
    </Box>
);

const LessonTypesSection = () => {
    return (
        <>
            <Typography variant="h3" component="h2" fontWeight="bold" color="primary.main" gutterBottom>
                Lesson Types
            </Typography>
            <Typography variant="h4" component="p" color="text.secondary" sx={{ mb: 4 }}>
                All prices include applicable taxes, no extra charges at checkout.
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
                            <MostPopularTag />
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <PersonIcon color="primary" fontSize="large" />
                                <Typography variant="h5" component="h2" fontWeight="bold">
                                    On-Site
                                </Typography>
                            </Box>
                            <PriceTag variant="h6" component="p">
                                $55 · 30 min &nbsp;|&nbsp; $72 · 45 min &nbsp;|&nbsp; $90 · 60 min
                            </PriceTag>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                1-2 students (same client). Students must be age 6+. Lessons taught at our pool.
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
                                    <ListItemText primary="Supports spot or recurring bookings"/>
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
                                <Typography variant="h5" component="h3" fontWeight="bold">
                                    Travel
                                </Typography>
                            </Box>
                            <PriceTag variant="h6" component="p">
                                $90 · 45 min &nbsp;|&nbsp; $110 · 60 min
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
                                    <ListItemText primary="Supports spot or recurring bookings"/>
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
                                <Typography variant="h5" component="h3" fontWeight="bold">
                                    Pool Rental
                                </Typography>
                            </Box>
                            <PriceTag variant="h6" component="p">
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
        <CourseCard
            elevation={3}
            sx={{
                mt: 6,
                border: '2px solid',
                borderColor: 'secondary.light',
            }}
        >
            <MostPopularTag />
            <Grid container spacing={4} alignItems="stretch">
                {/* Title + stat hero (left of divider) */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            sx={{
                                mb: 3,
                                pr: { xs: 9, md: 0 },
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            <LocalOfferIcon color="primary" fontSize="large" sx={{ flexShrink: 0 }} />
                            <Typography variant="h4" component="h2" fontWeight="bold" color="text.main" sx={{ fontSize: { xs: '1.5rem', sm: '2.4rem' } }}>
                                Bundles &amp; Deals
                            </Typography>
                        </Box>
                        <Stack spacing={4} alignItems="center" sx={{ width: '100%', mt: 2 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'secondary.main',
                                    color: 'common.white',
                                    px: { xs: 2.5, sm: 3.5 },
                                    py: { xs: 1.75, sm: 2.25 },
                                    borderRadius: 3,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                                    fontSize: { xs: '1.05rem', sm: '1.35rem' },
                                    fontWeight: 800,
                                    lineHeight: 1.25,
                                    textAlign: 'center',
                                    letterSpacing: '0.02em',
                                    maxWidth: '100%',
                                }}
                            >
                                6 Lessons for the price of 5
                            </Box>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    px: { xs: 2.25, sm: 3 },
                                    py: { xs: 1.25, sm: 2.25 },
                                    borderRadius: 3,
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                    fontSize: { xs: '0.95rem', sm: '1.35rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.35,
                                    textAlign: 'center',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                Save over 15% with every package
                            </Box>
                        </Stack>
                    </Box>
                </Grid>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, alignSelf: 'stretch', mx: 1 }} />

                {/* Features + CTA */}
                <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
                        <Typography
                            variant="h4"
                            component="h3"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                display: 'block',
                                mb: 1,
                            }}
                        >
                            How it works
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                            Our bundles work like punch cards, buy credits online and use them to book any lesson type: on-site, travel, or pool rental.
                        </Typography>
                        <Stack spacing={2} sx={{ mb: 2, flex: 1 }}>
                            {[
                                { title: 'Punch-card credits', desc: 'Each booking uses one credit. Credits never expire.' },
                                { title: 'Works for any lesson type', desc: 'On-site, travel, or pool rental — one package covers all.' },
                                { title: 'Buy & book online', desc: 'Purchase and redeem through our online booking system.' },
                            ].map(({ title, desc }) => (
                                <Box
                                    key={title}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 1.5,
                                    }}
                                >
                                    <CheckCircleIcon
                                        color="secondary"
                                        sx={{
                                            fontSize: 22,
                                            flexShrink: 0,
                                            mt: '0.2em',
                                        }}
                                    />
                                    <Box sx={{ minWidth: 0, pt: '0.05em' }}>
                                        <Typography variant="subtitle1" component="h4" fontWeight="bold" color="text.primary" sx={{ lineHeight: 1.35 }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                                            {desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ mt: 'auto' }}
                            component="a"
                            href="https://bookeo.com/daveswimschool"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Buy a bundle
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </CourseCard>
    );
};

const Lessons = () => {
    return (
        <Box sx={{ pb: 2 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Our Lesson Programs
                    </Typography>
                    <Typography variant="h5" component="p" color="inherit">
                        Choose the learning style that fits your goals and schedule.
                    </Typography>
                </Container>

                <Wave height={180} bottom style={{ zIndex: 2 }} />

            </PageHeader>

            <Container maxWidth="lg">
                <LessonTypesSection />
                <BundlesSection />
            </Container>
        </Box>
    );
};

export default Lessons;