import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import jenHeadshotBlur from '../assets/jenHeadshotBlur.webp';

const InstructorTestBig = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                py: { xs: 8, md: 8 },
                mt: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -80,
                    right: -80,
                    width: 320,
                    height: 320,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -60,
                    left: -60,
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{
                        display: 'block',
                        mb: 4,
                        fontSize: '0.7rem',
                    }}
                >
                    Meet One of Our Instructors
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: 6, md: 8 },
                    }}
                >
                    <Box
                        sx={{
                            flexShrink: 0,
                            position: 'relative',
                            alignSelf: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                width: { xs: 220, md: 280 },
                                height: { xs: 270, md: 340 },
                                borderRadius: 3,
                                zIndex: 0,
                            }}
                        />
                        <Box
                            component="img"
                            src={jenHeadshotBlur}
                            alt="Jen, swim instructor at Dave Swim School"
                            sx={{
                                position: 'relative',
                                zIndex: 1,
                                width: { xs: 220, md: 300 },
                                height: { xs: 270, md: 370 },
                                objectFit: 'cover',
                                borderRadius: 3,
                                display: 'block',
                            }}
                        />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="text.primary"
                            sx={{ mb: 2 }}
                        >
                            Hi, I'm Jen! 👋
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I'm a certified swim instructor and lifesaving instructor with the Lifesaving Society, with a passion for teaching that extends well beyond the pool. I also instruct dance, coach soccer, and lead youth programs across Toronto and Vaughan.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I've taught swimmers of all ages and skill levels through the City of Vaughan, tailoring lessons to the individual and providing the kind of structured, encouraging feedback that builds real confidence in the water.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            My approach is patient, adaptable, and safety-first. Whether you're taking your first strokes or working toward certification, I'll meet you where you are and help you get where you want to go.
                        </Typography>
                        
                        <Box sx={{ mt: 2 }}>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="text.primary"
                                sx={{ mb: 0.25 }}
                            >
                                Jen T.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Swim Instructor - Dave Swim School
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {[
                                    'Fully Certified',
                                    '3+ Years Experience',
                                    'Bilingual (FR/EN)',
                                ].map((label) => (
                                    <Chip
                                        key={label}
                                        label={label}
                                        size="small"
                                        sx={{
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            fontWeight: 500,
                                            fontSize: '0.72rem',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default InstructorTestBig;