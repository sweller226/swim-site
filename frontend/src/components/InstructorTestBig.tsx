import { Box, Container, Typography, Chip, Stack } from '@mui/material';

const InstructorTestBig = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                py: { xs: 6, md: 8 },
                mt: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -80,
                    right: -80,
                    width: { xs: 180, md: 320 },
                    height: { xs: 180, md: 320 },
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -60,
                    left: -60,
                    width: { xs: 140, md: 220 },
                    height: { xs: 140, md: 220 },
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
                        mb: { xs: 3, md: 4 },
                        textAlign: 'left',
                    }}
                >
                    Meet One of Our Instructors
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        gap: { xs: 4, md: 8 },
                    }}
                >
                    {/* Photo */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            position: 'relative',
                            alignSelf: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                width: { xs: 240, sm: 220, md: 280 },
                                height: { xs: 300, sm: 270, md: 340 },
                                borderRadius: 3,
                                zIndex: 0,
                            }}
                        />
                        <Box
                            component="img"
                            src="/jenHeadshotBlur.webp"
                            alt="Jen, swim instructor at Dave Swim School"
                            sx={{
                                position: 'relative',
                                zIndex: 1,
                                width: { xs: 240, sm: 220, md: 300 },
                                height: { xs: 300, sm: 270, md: 370 },
                                objectFit: 'cover',
                                borderRadius: 3,
                                display: 'block',
                            }}
                        />
                    </Box>

                    {/* Text content */}
                    <Box
                        sx={{
                            flex: 1,
                            width: '100%',
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="primary.dark"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
                                opacity: 0.8,
                            }}
                        >
                            Hi, I'm Jen! 👋
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I'm a certified swim instructor and lifesaving instructor with the Lifesaving Society. My teaching experience extends well beyond the pool — I also instruct dance, coach soccer, and lead youth programs across Toronto and Vaughan.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I've taught swimmers of all ages and skill levels through the City of Vaughan, including those with learning differences or physical disabilities.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            My approach is patient, adaptable, and safety-first. Whether you're taking your first strokes or working toward certification, I'll meet you where you are and help you get where you want to go.
                        </Typography>

                        <Box
                            sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="text.primary"
                                sx={{ mb: 0.25 }}
                            >
                                Jen T.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Swim Instructor — Dave Swim School
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                flexWrap="wrap"
                                useFlexGap
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                            >
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