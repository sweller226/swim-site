import { Box, Container, Typography, Grid, Paper, Rating, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const TestimonialCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(4),
    height: '100%',
}));

const reviews = [
    {
        name: 'Emily Davis',
        rating: 5,
        text: "The best swim school we've ever been to! My son went from being terrified of the water to loving it in just a few weeks. Highly recommend!",
        avatar: 'E'
    },
    {
        name: 'James Wilson',
        rating: 5,
        text: "Professional, clean, and friendly. The instructors are top-notch and really care about the students' progress.",
        avatar: 'J'
    },
    {
        name: 'Sarah Thompson',
        rating: 4,
        text: "Great flexible scheduling options. It's so easy to book classes around our busy schedule. Love the online portal.",
        avatar: 'S'
    }
];

const Testimonials = () => {
    return (
        <Box sx={{ py: 6, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom fontWeight="bold" sx={{ color: 'primary.main', mb: 6 }}>
                    What Parents Say
                </Typography>
                <Grid container spacing={4}>
                    {reviews.map((review, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <TestimonialCard elevation={2}>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>{review.avatar}</Avatar>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {review.name}
                                        </Typography>
                                        <Rating value={review.rating} readOnly size="small" />
                                    </Box>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    "{review.text}"
                                </Typography>
                            </TestimonialCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
