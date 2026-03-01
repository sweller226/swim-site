import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
});

const ImagePlaceholder = styled(Box)(({ theme }) => ({
    height: 240,
    backgroundColor: theme.palette.grey[300],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

interface InstructorProps {
    name: string;
    specialties: string[];
    bio: string;
}

const InstructorCard = ({ name, bio }: InstructorProps) => {
    return (
        <StyledCard>
            <ImagePlaceholder>
                <Typography variant="body2" color="text.secondary">
                    Details Coming Soon
                </Typography>
            </ImagePlaceholder>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {bio}
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default InstructorCard;
