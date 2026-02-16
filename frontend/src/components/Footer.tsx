import { Box, Container, Typography, Link, Grid, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'rgba(255, 255, 255, 0.95)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
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

const FooterLink = styled(Link)(({ theme }) => ({
    color: 'rgba(255, 255, 255, 0.88)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: theme.spacing(1),
    fontSize: '0.95rem',
    fontWeight: 500,
    '&:hover': {
        color: '#fff',
        textDecoration: 'underline',
    },
}));

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
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography component="h2" sx={footerHeadingSx}>Swim School</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 3, maxWidth: 300, lineHeight: 1.6 }}>
                            Building confidence in the water since 2010. We provide a safe, fun, and encouraging environment for swimmers of all ages.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <SocialButton size="small" aria-label="facebook">
                                <FacebookIcon />
                            </SocialButton>
                            <SocialButton size="small" aria-label="instagram">
                                <InstagramIcon />
                            </SocialButton>
                            <SocialButton size="small" aria-label="twitter">
                                <TwitterIcon />
                            </SocialButton>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography component="h2" sx={footerHeadingSx}>Quick Links</Typography>
                        <Box>
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#classes">Book Classes</FooterLink>
                            <FooterLink href="#instructors">Our Instructors</FooterLink>
                            <FooterLink href="#contact">Contact Us</FooterLink>
                            <FooterLink href="#faq">FAQ</FooterLink>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography component="h2" sx={footerHeadingSx}>Contact Info</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 1, lineHeight: 1.6 }}>
                            123 Swim Lane, Water City, ST 12345
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', mb: 5, lineHeight: 1.6 }}>
                            Email: [EMAIL_ADDRESS]<br />
                            Phone: [PHONE_NUMBER]
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.75)', display: 'block', lineHeight: 1.5 }}>
                            For questions, date swaps, time changes, extra info, or payment transfers, please contact Bookeo support directly.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
