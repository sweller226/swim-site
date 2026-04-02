import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import jenInPool from '../assets/jenInPool.webp';

const InstructorSection = () => {
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
                        letterSpacing: 4,
                        display: 'block',
                        mb: 6,
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
                            src={jenInPool}
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
                            I've been a swim instructor with the City of Vaughan since 2023.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            I am a certified Lifesaving Instructor and Emergency First Aid
                            Instructor through the Lifesaving Society, with both CPR-C and
                            CPR-B certifications.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            Beyond swimming, I teach dance and coach soccer. I'm
                            passionate about creating a positive, encouraging environment
                            for every student. I meet each swimmer exactly where they are
                            and build their confidence from there.
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="text.primary"
                                sx={{ mb: 0.25 }}
                            >
                                Jen T.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Swim Instructor · Dave Swim School
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

export default InstructorSection;