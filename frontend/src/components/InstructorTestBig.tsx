import { Box, Container, Typography, Chip, Stack, Button } from '@mui/material';

const InstructorTestBig = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                py: { xs: 6, md: 8 },
                mt: -2,
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
                        alignItems: { xs: 'flex-start', md: 'flex-start' },
                        gap: { xs: 3, md: 8 },
                    }}
                >
                    {/* === MOBILE: contact-card row (photo + name/chips) === */}
                    {/* === DESKTOP: just the photo column === */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: { xs: 'row', md: 'column' },
                            alignItems: { xs: 'center', md: 'flex-start' },
                            gap: { xs: 2, md: 0 },
                        }}
                    >
                        {/* Photo */}
                        <Box
                            component="img"
                            src="/jenHeadshotBlur.webp"
                            alt="Jen, swim instructor at Dave's Swim School"
                            sx={{
                                flexShrink: 0,
                                width: { xs: 180, sm: 160, md: 360 },
                                height: { xs: 220, sm: 195, md: 450 },
                                objectFit: 'cover',
                                borderRadius: 3,
                                display: 'block',
                            }}
                        />

                        {/* Name + chips — shown beside photo on mobile, hidden on desktop */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 0.5 }}>
                            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                                Jen T.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Swim Instructor — Dave's Swim School
                            </Typography>
                            <Stack direction="column" spacing={0.75} sx={{ mt: 0.5 }}>
                                {['Fully Certified', '3+ Years Experience', 'Bilingual (FR/EN)'].map((label) => (
                                    <Chip
                                        key={label}
                                        label={label}
                                        size="small"
                                        sx={{
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            fontWeight: 500,
                                            fontSize: '0.68rem',
                                            alignSelf: 'flex-start',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Box>

                    {/* Text content */}
                    <Box sx={{ flex: 1, width: '100%', textAlign: 'left' }}>
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
                            I'm a certified swim and lifesaving instructor with the Lifesaving Society. I also teach dance, coach soccer, and lead youth programs across Toronto and Vaughan.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I've worked with swimmers of all ages and skill levels through the City of Vaughan, including those with learning differences or physical disabilities.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            My approach is patient, adaptable, and safety-first. Whether you're just starting out or working toward certification, I'll meet you where you are and help you progress.
                        </Typography>

                        {/* Name + chips — hidden on mobile, shown on desktop */}
                        <Box
                            sx={{
                                mt: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{ mb: 0.25 }}>
                                Jen T.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Swim Instructor — Dave's Swim School
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                                {['Fully Certified', '3+ Years Experience', 'Bilingual (FR/EN)'].map((label) => (
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
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            size="large"
                            component="a"
                            href="https://bookeo.com/daveswimschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ mt: { xs: 2, md: 4 }, fontWeight: 700 }}
                        >
                            Book a Lesson
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default InstructorTestBig;