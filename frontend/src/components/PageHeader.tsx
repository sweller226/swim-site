import { styled } from '@mui/material/styles';
import {
    Box,
} from '@mui/material';

const PageHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: 'relative',                      // ← required for Wave to anchor correctly
    overflow: 'hidden',                        // ← keeps wave clipped to the header
    padding: theme.spacing(10, 0, 22, 0),      // ← extra bottom padding so wave doesn't overlap text
    marginBottom: theme.spacing(2),
    textAlign: 'center',
}));

export default PageHeader;