import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mr: 2,
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        <Box
                            component="img"
                            src="/Logo-Small.svg"
                            alt="Dave's Swim School logo"
                            sx={{
                                height: 32,
                                width: 'auto',
                                display: 'block',
                                mr: 1,
                            }}
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

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 1, sm: 2 },
                            flexWrap: 'wrap',
                            justifyContent: { xs: 'flex-end', md: 'flex-end' },
                        }}
                    >
                        <Button color={location.pathname === '/' ? 'primary' : 'inherit'} component={Link} to="/">
                            Home
                        </Button>
                        <Button color={location.pathname === '/lessons' ? 'primary' : 'inherit'} component={Link} to="/lessons">
                            Lessons
                        </Button>
                        <Button color={location.pathname === '/faq' ? 'primary' : 'inherit'} component={Link} to="/faq">
                            FAQ
                        </Button>
                        <Button color={location.pathname === '/contact' ? 'primary' : 'inherit'} component={Link} to="/contact">
                            Contact Us
                        </Button>
                        <Button variant="contained" color="primary" size="large" component="a" href="https://bookeo.com/testing123" target="_blank" rel="noopener noreferrer">
                            Book Now
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
