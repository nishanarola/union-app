  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import Stack from '@mui/material/Stack';
  import { tokens } from '../theme';

  export default function AuthLayout({ eyebrow, title, subtitle, children }) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: tokens.parchment,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: '100vh',
          p: { xs: 0, md: 2 },
          gap: { xs: 0, md: 2 }
        }}
      >
        <Box
          sx={{
            bgcolor: tokens.ink,
            color: tokens.parchment,
            width: { xs: '100%', md: '46%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 5,
            py: { xs: 6, md: 0 },
            position: 'relative',
            overflow: 'hidden',
            borderRadius: { xs: 0, md: 4 },
            boxShadow: { xs: 'none', md: '0 4px 20px rgba(0,0,0,0.08)' },
            backgroundImage: `radial-gradient(circle at 70% 8%, rgba(31, 93, 126, 0.35) 0%, rgba(28,37,65,0) 55%)`
          }}
        >
          <Stack spacing={4} alignItems="center" sx={{ zIndex: 1 }}>
            <Box
              component="svg"
              viewBox="0 0 72 72"
              sx={{ width: 62, height: 62, mb: -1 }}
            >
              <path
                d="M18 14 L18 42 C18 54 27 60 36 60 C45 60 54 54 54 42 L54 14"
                fill="none"
                stroke={tokens.highlighter}
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="36" cy="60" r="3" fill="#7EA8BE" />
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3rem' } }}>
              Union
            </Typography>
            <Box sx={{ textAlign: 'center', maxWidth: 320 }}>
              <Typography variant="body1" sx={{ opacity: 0.85 }}>
                Interview practice, exam prep, and resume feedback pulled together
                like a deck of cards you actually want to study from.
              </Typography>
            </Box>
          </Stack>

          {/* Top-right watermark */}
          <Box
            component="svg"
            viewBox="0 0 72 72"
            sx={{
              width: 600,
              height: 600,
              position: 'absolute',
              top: -110,
              right: -230,
              opacity: 0.1,
              pointerEvents: 'none',
              zIndex: 0
            }}
          >
            <path
              d="M18 14 L18 42 C18 54 27 60 36 60 C45 60 54 54 54 42 L54 14"
              fill="none"
              stroke={tokens.parchment}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: tokens.parchment,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 3,
            py: 6
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 420 }}>
            <Typography
              variant="overline"
              sx={{ color: tokens.pen, fontWeight: 600, letterSpacing: '0.12em' }}
            >
              {eyebrow}
            </Typography>
            <Typography variant="h3" sx={{ mt: 0.5, mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: tokens.graphite, mb: 4 }}>
              {subtitle}
            </Typography>
            {children}
          </Box>
        </Box>
      </Box>
    );
  }