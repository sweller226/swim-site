import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import heroBg from '../assets/hero_background2.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
        background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 80%, rgba(255,255,255,0.2) 100%)',
    }
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
        <HeroSection>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 3, pb: 2 }}>
                    <TrustBadge icon={<VerifiedUserIcon color="primary" />} text="Fully Insured" />
                    <TrustBadge icon={<SchoolIcon color="primary" />} text="Experienced Instructors" />
                    <TrustBadge icon={<AccessTimeIcon color="primary" />} text="Flexible Scheduling" />
                </Stack>

                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant="h2" component="h1" fontWeight="800" gutterBottom sx={{ color: 'primary.main' }}>
                                Confidence in the Water Starts Here
                            </Typography>

                            <Typography variant="h5" color="text.secondary" fontWeight="800" paragraph sx={{ mb: 4, maxWidth: '600px' }}>
                                Professional swim instruction for all ages. Flexible booking, experienced teachers, and a safe, fun environment.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button variant="contained" color="primary" size="large" component="a" href="https://bookeo.com/testing123" target="_blank" rel="noopener noreferrer">
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
