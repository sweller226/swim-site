'use client';

import {
    AppBar, Toolbar, Typography, Button, Box, Container,
    IconButton, Drawer, List, ListItemButton, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Lessons', to: '/lessons' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
];

const NavBar = () => {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{ minHeight: { xs: 72, sm: 80 }, py: 1 }}  // taller bar
                >
                    {/* Logo + Name */}
                    <Box
                        component={NextLink}
                        href="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        <Box
                            component="img"
                            src="/Logo-Small.png"
                            alt="Dave's Swim School logo"
                            sx={{ height: 44, width: 'auto', display: 'block', mr: 1.5 }}  // bigger logo
                        />
                        <Typography
                            variant="h5"  // bumped from h6
                            noWrap
                            sx={{
                                ml: 1,
                                display: { xs: 'none', sm: 'flex' },
                                fontWeight: 700,  // slightly bolder
                                letterSpacing: '.08rem',
                            }}
                        >
                            Dave's Swim School
                        </Typography>
                    </Box>

                    {/* Desktop nav */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
                        {navLinks.map(({ label, to }) => (
                            <Button
                                key={to}
                                color={pathname === to ? 'primary' : 'inherit'}
                                component={NextLink}
                                href={to}
                                size="large"  // bumped from default
                                sx={{ fontSize: '1rem', px: 2 }}  // larger text + padding
                            >
                                {label}
                            </Button>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            component="a"
                            href="https://bookeo.com/daveswimschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ fontSize: '1rem', px: 3, ml: 1 }}  // more padding on CTA
                        >
                            Book Now
                        </Button>
                    </Box>

                    {/* Mobile: Book Now + Hamburger */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1.5 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"  // bumped from small
                            component="a"
                            href="https://bookeo.com/daveswimschool"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ fontSize: '0.9rem' }}
                        >
                            Book Now
                        </Button>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="open menu"
                            onClick={() => setDrawerOpen(true)}
                            size="large"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: '2.2rem', stroke: 'currentColor'} }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 200,
                        bgcolor: 'background.default',
                        color: 'text.primary',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        aria-label="close menu"
                        color="inherit"
                        size="large"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ borderColor: 'divider' }} />
                <List>
                    {navLinks.map(({ label, to }) => (
                        <ListItemButton
                            key={to}
                            component={NextLink}
                            href={to}
                            selected={pathname === to}
                            onClick={() => setDrawerOpen(false)}
                            sx={{
                                py: 1.5,  // taller list items
                                '&:hover': {
                                    color: 'white',
                                },
                                '&.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                },
                            }}
                        >
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{ variant: 'h6', fontWeight: 500, color: 'inherit' }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default NavBar;