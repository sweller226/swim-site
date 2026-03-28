import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import heroBg from '../assets/hero_background.jpg';

const HeroSection = styled('section')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.light,
    minHeight: '480px',
    [theme.breakpoints.up('md')]: {
        minHeight: '600px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.2) 100%)',
    },
}));

const StyledTrustBadge = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: 80, // rough equivalent to 10 * 8px
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    whiteSpace: 'nowrap',
}));

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <StyledTrustBadge elevation={0}>
        {icon}
        <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
            {text}
        </Typography>
    </StyledTrustBadge>
);

const Hero = () => {
    return (
        <HeroSection aria-labelledby="hero-main-heading">
            <Box
                component="img"
                src={heroBg}
                alt="low opacity background image of rippling water"
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    zIndex: 0,
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 3, pb: 2 }}>
                    <TrustBadge icon={<VerifiedUserIcon color="primary" />} text="Fully Insured" />
                    <TrustBadge icon={<SchoolIcon color="primary" />} text="Experienced Instructors" />
                    <TrustBadge icon={<AccessTimeIcon color="primary" />} text="Flexible Scheduling" />
                </Stack>

                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                id="hero-main-heading"
                                variant="h2"
                                component="h1"
                                fontWeight="800"
                                gutterBottom
                                sx={{ color: 'primary.main' }}
                            >
                                Confidence in the Water Starts Here
                            </Typography>

                            <Typography variant="h5" color="text.secondary" fontWeight="800" sx={{ mb: 4, maxWidth: '600px' }}>
                                Professional private on-site and travel swim lessons for all ages. Flexible booking, experienced instructors, and a safe, fun environment.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button variant="contained" color="primary" size="large" component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                                    Book Now
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </HeroSection>
    );
};

export default Hero;
