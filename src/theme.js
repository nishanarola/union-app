import { createTheme } from '@mui/material/styles';

// Design tokens for "Union" — a student's flashcard-deck aesthetic.
// Ink navy + warm parchment + amber highlighter, instead of the usual
// generic SaaS blue/purple gradient.
export const tokens = {
  ink: '#1C2541',        // deep navy-ink, dark surfaces & primary text
  parchment: '#F7F3E9',  // warm paper background
  highlighter: '#FFC857',// amber highlighter accent (primary CTA)
  pen: '#E4572E',        // coral pen accent (links, focus)
  graphite: '#5C6079',   // muted secondary text
  success: '#2D6A4F',
  hairline: '#DED6C3'
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: tokens.ink, contrastText: tokens.parchment },
    secondary: { main: tokens.highlighter, contrastText: tokens.ink },
    error: { main: tokens.pen },
    success: { main: tokens.success },
    background: { default: tokens.parchment, paper: '#FFFFFF' },
    text: { primary: tokens.ink, secondary: tokens.graphite }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, textTransform: 'none' }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, paddingTop: 10, paddingBottom: 10 },
        containedSecondary: {
          color: tokens.ink,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none', backgroundColor: '#F0B23E' }
        }
      }
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          '& fieldset': { borderColor: tokens.hairline },
          '&:hover fieldset': { borderColor: tokens.graphite },
          '&.Mui-focused fieldset': { borderColor: tokens.ink, borderWidth: 2 }
        }
      }
    }
  }
});

export default theme;
