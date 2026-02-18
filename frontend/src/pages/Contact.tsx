import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';

const PageHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(10, 0, 6, 0),
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));

const InfoCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
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
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoCard elevation={2}>
                            <LocationOnIcon color="primary" sx={{ fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                Address
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                123 Swim Lane<br />
                                Water City, ST 12345
                            </Typography>
                        </InfoCard>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoCard elevation={2}>
                            <EmailIcon color="primary" sx={{ fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                Email
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="a" href="mailto:[EMAIL_ADDRESS]" sx={{ lineHeight: 1.6, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                [EMAIL_ADDRESS]
                            </Typography>
                        </InfoCard>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <InfoCard elevation={2}>
                            <PhoneIcon color="primary" sx={{ fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                Phone
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="a" href="tel:[PHONE_NUMBER]" sx={{ lineHeight: 1.6, color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                                [PHONE_NUMBER]
                            </Typography>
                        </InfoCard>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6, p: 3, bgcolor: 'background.default', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, maxWidth: 560, mx: 'auto' }}>
                        For questions about booking, date swaps, time changes, or payment transfers, please contact Bookeo support directly through your booking confirmation.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
