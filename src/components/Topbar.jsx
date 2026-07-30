import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { tokens } from '../theme';

export default function Topbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <Box
      sx={{
        height: 72,
        bgcolor: tokens.parchment,
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 3,
        gap: 2
      }}
    >
      <Avatar sx={{ bgcolor: tokens.pen, width: 36, height: 36 }}>{initial}</Avatar>
      <Typography sx={{ fontWeight: 600, color: tokens.ink }}>
        {user ? user.name : 'Guest'}
      </Typography>
      <Button variant="outlined" size="small" onClick={handleLogout}>
        Log out
      </Button>
    </Box>
  );
}