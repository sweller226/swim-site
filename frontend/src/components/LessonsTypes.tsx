'use client';

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
    Stack,
    type BoxProps,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PoolIcon from '@mui/icons-material/Pool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

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
        boxShadow: theme.shadows[3],
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

const LessonTypes = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" component="h2" fontWeight="bold" color="primary.main" gutterBottom>
                Lesson Types
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
                All prices include applicable taxes, no extra charges at checkout.
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
                {/* Private On-Site */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ flex: { md: 1 } }}>
                    <CourseCard
                        elevation={3}
                        sx={{ border: 2, borderColor: 'secondary.light' }}
                    >
                        <MostPopularTag />
                        <Box display="flex" alignItems="center" gap={2} mb={2.5}>
                            <PersonIcon color="primary" fontSize="large" />
                            <Typography variant="h5" component="h2" fontWeight="bold">
                                On-Site
                            </Typography>
                        </Box>

                        <Grid
                            container
                            spacing={5}
                            sx={{ mb: 2, maxWidth: 500, mx: 'auto' }}
                        >
                            <Grid size={{ xs: 5 }}>
                                <Typography variant="body2" fontWeight={700} color="secondary.main" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 0.75 }}>
                                    Individual
                                </Typography>
                                <Stack spacing={0.5}>
                                    <Typography variant="body1" fontWeight={700} sx={{ whiteSpace: 'nowrap' }} color="secondary.main">$55 · 30 min</Typography>
                                    <Typography variant="body1" fontWeight={700} sx={{ whiteSpace: 'nowrap' }} color="secondary.main">$72 · 45 min</Typography>
                                    <Typography variant="body1" fontWeight={700} sx={{ whiteSpace: 'nowrap' }} color="secondary.main">$92 · 60 min</Typography>
                                </Stack>
                            </Grid>
                            <Grid size={{ xs: 7 }}>
                                <Typography variant="body2" fontWeight={700} noWrap sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 0.75, color: 'accent.main' }}>
                                    With Bundle
                                </Typography>
                                <Stack spacing={0.5}>
                                    <Typography variant="body1" fontWeight={700} sx={{ color: 'accent.main', whiteSpace: 'nowrap' }}>$46 · 30 min</Typography>
                                    <Typography variant="body1" fontWeight={700} sx={{ color: 'accent.main', whiteSpace: 'nowrap' }}>$60 · 45 min</Typography>
                                    <Typography variant="body1" fontWeight={700} sx={{ color: 'accent.main', whiteSpace: 'nowrap' }}>$77 · 60 min</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Box sx={{ flex: 1 }} />
                        <List dense disablePadding sx={{ mb: 2 }}>
                            {[
                                "Private lessons in our pool",
                                "1–2 students included, +$20 per extra",
                            ].map((text) => (
                                <ListItem key={text} disablePadding sx={{ alignItems: 'flex-start', mb: 1.25 }}>
                                    <ListItemIcon sx={{ minWidth: 30, mt: '2px' }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        primaryTypographyProps={{ variant: 'body2', color: 'text.primary', lineHeight: 1.5, fontWeight: 500 }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                            Book Now
                        </Button>
                    </CourseCard>
                </Grid>

                {/* Travel */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ flex: { md: 1 } }}>
                    <CourseCard elevation={2}>
                        <Box display="flex" alignItems="center" gap={2} mb={2.5}>
                            <LocationOnIcon color="primary" fontSize="large" />
                            <Typography variant="h5" component="h3" fontWeight="bold">
                                Travel
                            </Typography>
                        </Box>

                        <Grid
                            container
                            spacing={4}
                            sx={{ mb: 2, maxWidth: 500, mx: 'auto' }}
                        >
                            <Grid size={{ xs: 5 }}>
                                <Typography variant="body2" fontWeight={700} color="secondary.main" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 0.75 }}>
                                    Individual
                                </Typography>
                                <Stack spacing={0.5}>
                                    <Typography variant="body1" fontWeight={700} color="secondary.main" sx={{ whiteSpace: 'nowrap' }}>$92 · 45 min</Typography>
                                    <Typography variant="body1" fontWeight={700} color="secondary.main" sx={{ whiteSpace: 'nowrap' }}>$110 · 60 min</Typography>
                                </Stack>
                            </Grid>
                            <Grid size={{ xs: 7 }}>
                                <Typography variant="body2" fontWeight={700} noWrap sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 0.75, color: 'accent.main' }}>
                                    With Bundle
                                </Typography>
                                <Stack spacing={0.5}>
                                    <Typography variant="body1" fontWeight={700} sx={{ color: 'accent.main' }}>$77 · 45 min</Typography>
                                    <Typography variant="body1" fontWeight={700} sx={{ color: 'accent.main' }}>$92 · 60 min</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Box sx={{ flex: 1 }} />
                        <List dense disablePadding sx={{ mb: 2 }}>
                            {[
                                "Travel lessons to your pool",
                                "1–2 students included, +$20 per extra",
                                "Open 10am-12pm, and 2pm-4pm"
                            ].map((text) => (
                                <ListItem key={text} disablePadding sx={{ alignItems: 'flex-start', mb: 1.25 }}>
                                    <ListItemIcon sx={{ minWidth: 30, mt: '2px' }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        primaryTypographyProps={{ variant: 'body2', color: 'text.primary', lineHeight: 1.5, fontWeight: 500 }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                            Book Now
                        </Button>
                    </CourseCard>
                </Grid>

                {/* Pool Rental */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ flex: { md: 1 } }}>
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

                        <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                            Private pool access for events. Up to 10 swimmers.
                        </Typography>

                        <Box sx={{ flex: 1 }} />
                        <List dense disablePadding sx={{ mb: 2 }}>
                            {[
                                "Rent our pool, minimum 2 hours",
                                "1 lifeguard included",
                                "Ages 6+ only",
                            ].map((text) => (
                                <ListItem key={text} disablePadding sx={{ alignItems: 'flex-start', mb: 1.25 }}>
                                    <ListItemIcon sx={{ minWidth: 30, mt: '2px' }}>
                                        <CheckCircleIcon color="secondary" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        primaryTypographyProps={{ variant: 'body2', color: 'text.primary', lineHeight: 1.5, fontWeight: 500 }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="contained" size="large" fullWidth sx={{ mt: 'auto' }} component="a" href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer">
                            Book Now
                        </Button>
                    </CourseCard>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LessonTypes;