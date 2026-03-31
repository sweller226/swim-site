import { Box, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import Seo from '../seo/Seo';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Seo />
            <CssBaseline />
            <NavBar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
