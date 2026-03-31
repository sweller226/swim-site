import { Box, Container, Typography, Link, Grid, Stack, IconButton, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Wave from './Wave';

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'rgba(255, 255, 255, 0.95)',
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(4),
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
        paddingTop: theme.spacing(22),
        paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(22),
        paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(22),
        paddingBottom: theme.spacing(6),
    },
    marginTop: 'auto',
}));

const footerHeadingSx = {
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.02em',
    textTransform: 'uppercase' as const,
    fontSize: '0.8rem',
    mb: 2,
};

const footerLinkSx = {
    color: 'rgba(255, 255, 255, 0.88)',
    textDecoration: 'none',
    display: 'block',
    mb: 1,
    fontSize: '0.95rem',
    fontWeight: 500,
    '&:hover': {
        color: '#fff',
        textDecoration: 'underline',
    },
};

const SocialButton = styled(IconButton)(({ theme }) => ({
    color: 'rgba(255, 255, 255, 0.9)',
    padding: theme.spacing(1),
    '&:hover': {
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Wave height={220} top style={{ zIndex: 2 }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={{ xs: 5, md: 6 }}>

                    {/* Brand block — full width on mobile, 4 cols on desktop */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <Box
                                component="img"
                                src="/Logo-Small.svg"
                                alt="Dave's Swim School logo"
                                sx={{ height: 32, width: 'auto', display: 'block', mr: 1 }}
                            />
                            <Typography variant="h6" sx={{ color: 'text.contrast', fontWeight: 700, letterSpacing: '0.01em' }}>
                                Dave's Swim School
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body2"
                            sx={{
                                color: (theme) => alpha(theme.palette.primary.background!, 0.95),
                                mb: 2,
                                maxWidth: { xs: '100%', md: 280 },
                                lineHeight: 1.7,
                            }}
                        >
                            Building confidence in the water. A safe, fun, and encouraging environment for swimmers of all ages.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Link href="https://www.facebook.com/daveswimschool" target="_blank" rel="noopener noreferrer" sx={{ lineHeight: 0 }}>
                                <SocialButton size="medium" aria-label="Facebook">
                                    <FacebookIcon fontSize="medium" />
                                </SocialButton>
                            </Link>
                            <Link href="https://www.instagram.com/daveswimschool" target="_blank" rel="noopener noreferrer" sx={{ lineHeight: 0 }}>
                                <SocialButton size="medium" aria-label="Instagram">
                                    <InstagramIcon fontSize="medium" />
                                </SocialButton>
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Divider — only on mobile, between brand and links */}
                    <Grid size={{ xs: 12, md: 0 }} sx={{ display: { xs: 'block', md: 'none' }, py: 0 }}>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
                    </Grid>

                    {/* Explore — half width on mobile, 4 cols on desktop */}
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Typography component="h2" sx={footerHeadingSx}>Explore</Typography>
                        <Box>
                            <Link component={RouterLink} to="/" onClick={() => window.scrollTo(0, 0)} sx={footerLinkSx}>Home</Link>
                            <Link href="https://bookeo.com/daveswimschool" target="_blank" rel="noopener noreferrer" sx={footerLinkSx}>Book Classes</Link>
                            <Link component={RouterLink} to="/contact" sx={footerLinkSx}>Contact Us</Link>
                            <Link component={RouterLink} to="/faq" sx={footerLinkSx}>FAQ</Link>
                        </Box>
                    </Grid>

                    {/* Get in Touch — half width on mobile, 4 cols on desktop */}
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Typography component="h2" sx={footerHeadingSx}>Get in Touch</Typography>
                        <Stack spacing={1} sx={{ mb: 2 }}>
                            <Link href="mailto:contact@daveswimschool.ca" sx={{ ...footerLinkSx, fontSize: '0.88rem', wordBreak: 'break-word' }}>
                                contact@daveswimschool.ca
                            </Link>
                            <Link href="tel:6477464644" sx={{ ...footerLinkSx, fontSize: '0.88rem' }}>
                                647 746-4644
                            </Link>
                        </Stack>
                        <Typography
                            variant="caption"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.55)',
                                display: { xs: 'none', sm: 'block' },
                                lineHeight: 1.6,
                                maxWidth: 220,
                                mb: 2.5,
                            }}
                        >
                            Questions, reschedules, or payment transfers? Don't hesitate to reach out.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
};

export default Footer;