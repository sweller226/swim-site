import { Box, Container, Typography, Grid } from '@mui/material';
import InstructorCard from './InstructorCard';

// Dummy data
const instructors = [
    {
        name: 'Sarah Jenkins',
        experience: '5 Years',
        specialties: ['Beginners', 'Toddlers'],
        bio: 'Sarah loves helping little ones get comfortable in the water. Her patient and fun approach makes learning to swim a joy.'
    },
    {
        name: 'Mike Ross',
        experience: '8 Years',
        specialties: ['Competitive', 'Adults'],
        bio: 'Former competitive swimmer Mike specializes in stroke refinement and helping adults overcome their fear of water.'
    },
    {
        name: 'Jessica Lee',
        experience: '4 Years',
        specialties: ['Adaptive Swim', 'Kids'],
        bio: 'Jessica is certified in adaptive swimming techniques and ensures every student, regardless of ability, thrives in the pool.'
    }
];

const InstructorList = () => {
    return (
        <Box id="instructors" sx={{ py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 6, color: 'primary.main' }}>
                    Meet Our Expert Instructors
                </Typography>
                <Grid container spacing={4}>
                    {instructors.map((instructor) => (
                        <Grid key={instructor.name} size={{ xs: 12, md: 4 }}>
                            <InstructorCard {...instructor} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default InstructorList;
