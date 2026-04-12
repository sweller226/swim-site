'use client';

import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PoolIcon from '@mui/icons-material/Pool';
import NextLink from 'next/link';

const PromoCard = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: (theme.shape.borderRadius as number) * 2,
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const FirstLessonCard = styled(PromoCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
}));

const BundleCard = styled(PromoCard)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
}));

const CodeBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: alpha('#fff', 0.15),
    borderRadius: theme.shape.borderRadius,
    border: `1px dashed ${alpha('#fff', 0.4)}`,
    padding: theme.spacing(1.25, 2),
    marginBottom: theme.spacing(3),
}));

const PerkRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
}));

const PerkDot = styled(Box)(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    flexShrink: 0,
    marginTop: 7,
}));

const DecorativeCircle = styled(Box)({
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
});

const PromoSection = () => {
    return (
        <Box
            component="section"
            aria-label="April promotions"
            sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 4 }}>
                    <Chip
                        label="April Promotions"
                        size="small"
                        sx={{
                            bgcolor: 'accent.background',
                            color: 'accent.dark',
                            fontWeight: 600,
                            mb: 1.5,
                            fontSize: '0.75rem',
                        }}
                    />
                    <Typography variant="h3" component="h2" color="primary.main" gutterBottom>
                        Special Offers This Month
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
                        Limited-time deals to help you get started or level up your swimming.
                        Offers valid through April 30.
                    </Typography>
                </Box>

                <Grid container spacing={3} alignItems="stretch">
                    {/* First Lesson Promo */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FirstLessonCard>
                            {/* Decorative background circles */}
                            <DecorativeCircle
                                sx={{
                                    width: 220,
                                    height: 220,
                                    bgcolor: alpha('#fff', 0.05),
                                    top: -60,
                                    right: -60,
                                }}
                            />
                            <DecorativeCircle
                                sx={{
                                    width: 120,
                                    height: 120,
                                    bgcolor: alpha('#fff', 0.05),
                                    bottom: 20,
                                    left: -40,
                                }}
                            />

                            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <LocalOfferIcon sx={{ color: alpha('#fff', 0.8), fontSize: 20 }} />
                                    <Typography variant="overline" sx={{ color: alpha('#fff', 0.8), letterSpacing: 1.5 }}>
                                        April only
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="h4"
                                    component="h3"
                                    fontWeight={700}
                                    sx={{ color: '#fff', mb: 1 }}
                                >
                                    First Lesson Half Off
                                </Typography>

                                <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), mb: 3, lineHeight: 1.7 }}>
                                    New to Dave Swim School? Try your first lesson at 50% off.
                                    Apply the code at checkout — no commitment required.
                                </Typography>

                                <CodeBox>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: alpha('#fff', 0.6), display: 'block', mb: 0.25 }}>
                                            Promo code
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={700}
                                            sx={{ color: '#fff', letterSpacing: 2 }}
                                        >
                                            APRILFIRST
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" sx={{ color: alpha('#fff', 0.5) }}>
                                        Expires Apr 30
                                    </Typography>
                                </CodeBox>

                                <Box sx={{ mt: 'auto' }}>
                                    <Button
                                        component="a"
                                        href="https://bookeo.com/daveswimschool"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        sx={{
                                            bgcolor: '#fff',
                                            color: 'primary.main',
                                            '&:hover': {
                                                bgcolor: alpha('#fff', 0.9),
                                                boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
                                            },
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                </Box>
                            </Box>
                        </FirstLessonCard>
                    </Grid>

                    {/* Bundle Promo */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <BundleCard>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <PoolIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                                <Typography variant="overline" color="secondary.main" sx={{ letterSpacing: 1.5 }}>
                                    Best value
                                </Typography>
                            </Box>

                            <Typography
                                variant="h4"
                                component="h3"
                                fontWeight={700}
                                color="primary.main"
                                sx={{ mb: 1 }}
                            >
                                6-Lesson Bundle
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                                Commit to your progress. Buy a package of 6 lessons and
                                your first one is guaranteed free — every time.
                            </Typography>

                            <Box
                                sx={{
                                    bgcolor: 'secondary.main',
                                    borderRadius: 2,
                                    px: 2.5,
                                    py: 1.5,
                                    display: 'inline-flex',
                                    alignItems: 'baseline',
                                    gap: 1,
                                    mb: 3,
                                }}
                            >
                                <Typography variant="h5" fontWeight={700} sx={{ color: '#fff' }}>
                                    1 free lesson
                                </Typography>
                                <Typography variant="body2" sx={{ color: alpha('#fff', 0.8) }}>
                                    with every 6-pack
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                {[
                                    'First lesson always included free',
                                    'Flexible scheduling across all 6 sessions',
                                    'Same experienced instructor each time',
                                    'On-site or travel options available',
                                ].map((perk) => (
                                    <PerkRow key={perk}>
                                        <PerkDot />
                                        <Typography variant="body2" color="text.secondary">
                                            {perk}
                                        </Typography>
                                    </PerkRow>
                                ))}
                            </Box>

                            <Box sx={{ mt: 'auto' }}>
                                <Button
                                    component={NextLink}
                                    href="/lessons"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    fullWidth
                                >
                                    View Lessons &amp; Pricing
                                </Button>
                            </Box>
                        </BundleCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PromoSection;