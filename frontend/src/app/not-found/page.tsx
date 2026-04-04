'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

const NotFound = () => {
    const router = useRouter();

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 3,
                gap: 2,
            }}
        >
            <Box
                component="img"
                src="/Logo-Big.png"
                alt="Dave's Swim School"
                sx={{ width: 140, opacity: 0.5, mb: 1 }}
            />

            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '5rem', sm: '7rem' }, lineHeight: 1, color: 'primary.main' }}>
                404
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Looks like you've gone off the deep end.
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 360 }}>
                The page you're looking for doesn't exist. Let's get you back to shore.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
                <Button variant="contained" size="large" onClick={() => router.push('/')} sx={{ px: 4, fontWeight: 700 }}>
                    Back to Home
                </Button>
                <Button variant="outlined" size="large" component={NextLink} href="/contact" sx={{ px: 4 }}>
                    Contact Us
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;