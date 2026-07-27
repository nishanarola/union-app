import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { tokens } from '../theme';

// Placeholder only — the real Sidebar/Navbar dashboard is Day 3's deliverable.
// This just gives Day 1's login flow somewhere valid to land.
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('union_user') || 'null');
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: tokens.parchment,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 1 }}>
          {user ? `Welcome, ${user.name}!` : 'Welcome to Union'}
        </Typography>
        <Typography variant="body1" sx={{ color: tokens.graphite }}>
          Dashboard layout arrives Day 3 — this confirms the Day 1 login flow works end to end.
        </Typography>
      </Box>
    </Box>
  );
}
