import { Container, Typography, Box, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import placeholder from '../assets/placeholder.jpg';

const PageHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10, 0, 6, 0),
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));

const Contact = () => {
    return (
        <Box sx={{ pb: 8 }}>
            <PageHeader>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom color="inherit">
                        Contact Us
                    </Typography>
                    <Typography variant="h5" color="inherit" sx={{ opacity: 0.95 }}>
                        Get in touch with any questions about our swim lessons.
                    </Typography>
                </Container>
            </PageHeader>

            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start" sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" sx={{ display: 'block', mb: 2, color: 'primary.main' }}>
                            For any questions or issues
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                            Please contact us directly
                            by email or phone. We&apos;re happy to help you adjust your schedule or answer any other questions about lessons.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <LocationOnIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                                        Address
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                        123 Swim Lane<br />
                                        Water City, ST 12345
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <EmailIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                                        Email
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        component="a"
                                        href="mailto:[EMAIL_ADDRESS]"
                                        sx={{ lineHeight: 1.6, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                    >
                                        [EMAIL_ADDRESS]
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <PhoneIcon color="primary" sx={{ fontSize: 40, mt: 0.5 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                                        Phone
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        component="a"
                                        href="tel:[PHONE_NUMBER]"
                                        sx={{ lineHeight: 1.6, color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                                    >
                                        [PHONE_NUMBER]
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            component="img"
                            src={placeholder}
                            alt="Pool and lessons"
                            sx={{
                                width: '100%',
                                objectFit: 'cover',
                                aspectRatio: '4/3',
                                borderRadius: 2,
                                mt: { xs: 4, md: 0 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
