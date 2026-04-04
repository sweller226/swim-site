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
                <Toolbar disableGutters>
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
                            width={32}
                            height={32}
                            sx={{ height: 32, width: 'auto', display: 'block', mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                ml: 1,
                                display: { xs: 'none', sm: 'flex' },
                                fontWeight: 600,
                                letterSpacing: '.08rem',
                            }}
                        >
                            Dave's Swim School
                        </Typography>
                    </Box>

                    {/* Desktop nav */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        {navLinks.map(({ label, to }) => (
                            <Button
                                key={to}
                                color={pathname === to ? 'primary' : 'inherit'}
                                component={NextLink}
                                href={to}
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
                        >
                            Book Now
                        </Button>
                    </Box>

                    {/* Mobile: Book Now + Hamburger */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            component="a"
                            href="https://bookeo.com/daveswimschool"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book Now
                        </Button>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="open menu"
                            onClick={() => setDrawerOpen(true)}
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
                        width: 240,
                        bgcolor: 'background.default',
                        color: 'text.primary',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        aria-label="close menu"
                        color="inherit"
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
                                '&.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                },
                            }}
                        >
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{ variant: 'button' }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default NavBar;