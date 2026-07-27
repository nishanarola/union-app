import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { tokens } from '../theme';

function FlashcardStack() {
  const cards = [
    { label: 'Mock Interview', rotate: -8, top: 0, accent: tokens.pen },
    { label: 'Exam Study', rotate: 4, top: 28, accent: tokens.highlighter },
    { label: 'Resume Help', rotate: -3, top: 56, accent: '#7EA8BE' }
  ];
  return (
    <Box sx={{ position: 'relative', width: 280, height: 260, mx: 'auto' }}>
      {cards.map((c, i) => (
        <Box
          key={c.label}
          sx={{
            position: 'absolute',
            top: c.top,
            left: '50%',
            width: 240,
            height: 150,
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            transform: `translateX(-50%) rotate(${c.rotate}deg)`,
            boxShadow: '0 12px 24px rgba(0,0,0,0.25)',
            border: '1px solid rgba(0,0,0,0.06)',
            p: 2.5,
            zIndex: i,
            transition: 'transform 0.35s ease',
            '&:hover': {
              transform: `translateX(-50%) rotate(${c.rotate}deg) translateY(-6px)`
            }
          }}
        >
          <Box sx={{ width: 28, height: 4, bgcolor: c.accent, borderRadius: 2, mb: 1.5 }} />
          <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, color: tokens.ink }}>
            {c.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function AuthLayout({ eyebrow, title, subtitle, children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }
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
          backgroundImage: `radial-gradient(circle at 70% 8%, rgba(31, 93, 126, 0.35) 0%, rgba(28,37,65,0) 55%)`
        }}
      >
        <Stack spacing={4} alignItems="center" sx={{ zIndex: 1 }}>
          <Box
            component="svg"
            viewBox="0 0 72 72"
            sx={{
              width: 30,
              height: 30,
              mb: -1
            }}
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
          {/* <FlashcardStack /> */}
          <Box sx={{ textAlign: 'center', maxWidth: 320 }}>
            <Typography variant="body1" sx={{ opacity: 0.85 }}>
              Interview practice, exam prep, and resume feedback pulled together
              like a deck of cards you actually want to study from.
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        component="svg"
        viewBox="0 0 72 72"
        sx={{
          width: 90,
          height: 90,
          position: 'absolute',
          bottom: 24,
          left: 24,
          opacity: 0.12,
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