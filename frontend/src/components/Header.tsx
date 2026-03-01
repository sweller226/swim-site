import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PoolIcon from '@mui/icons-material/Pool';

const Header = () => {
    const location = useLocation();

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <PoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        DAVE'S SWIM SCHOOL
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
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
