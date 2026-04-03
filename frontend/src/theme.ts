import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        background?: string;
    }

    interface SimplePaletteColorOptions {
        background?: string;
    }

    interface Palette {
        accent: PaletteColor;
    }

    interface PaletteOptions {
        accent?: SimplePaletteColorOptions;
    }
}

// Color Palette
const colors = {
    primary: {
        main: "#0077be",
        background: "#f4fafe",
        dark: "#004782",
        light: "#0094ce",
    },
    secondary: {
        main: '#00a896',
        light: '#4ccbb9',
        dark: '#007967',
        background: '#f4fafe',
    },
    background: {
        default: '#f4fafe',
        paper: '#ffffff',
    },
    text: {
        primary: '#0d2b3e',
        secondary: '#5f7682',
        contrast: '#ffffff',
    },
    accent: {
        main: '#f26522',     
        dark: '#c44e0f',      
        background: '#fff4ee', 
    },
};

// Create the theme
let theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
        accent: colors.accent,
    },
    typography: {
        fontFamily: [
            '"Inter"',
            '"Roboto"',
            '"Helvetica"',
            '"Arial"',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            color: colors.text.primary,
        },
        h2: {
            fontWeight: 600,
            color: colors.text.primary,
        },
        h3: {
            fontWeight: 600,
            color: colors.text.primary,
        },
        h4: {
            fontWeight: 600,
            color: colors.text.primary,
        },
        h5: {
            fontWeight: 500,
            color: colors.text.primary,
        },
        h6: {
            fontWeight: 500,
            color: colors.text.primary,
        },
        button: {
            textTransform: 'none', // More friendly feel
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24, // Rounded pills for buttons
                    padding: '8px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0, 119, 190, 0.2)',
                    },
                },
                containedPrimary: {
                    backgroundColor: colors.primary.main,
                    '&:hover': {
                        backgroundColor: colors.primary.dark,
                    },
                },
                containedSecondary: {
                    '&:hover': {
                        backgroundColor: colors.secondary.dark,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                }
            }
        }
    },
});

theme = responsiveFontSizes(theme);

export default theme;