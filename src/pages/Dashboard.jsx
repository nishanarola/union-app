import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { tokens } from '../theme';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };
  
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
          Dashboard layout arrives Day 3 this confirms the Day 1 login flow works end to end.
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Log out
        </Button>
      </Box>
    </Box>
  );
}
