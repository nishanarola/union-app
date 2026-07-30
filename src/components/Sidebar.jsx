import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import { tokens } from '../theme';

const navItems = [
  { label: 'AI Mock Interview', path: '/dashboard/interview', icon: RecordVoiceOverIcon },
  { label: 'Exam Study Help', path: '/dashboard/exam', icon: MenuBookIcon },
  { label: 'Resume Builder', path: '/dashboard/resume', icon: DescriptionIcon }
];

export default function Sidebar() {
  const location = useLocation();
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
        width: 260,
        bgcolor: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        px: 2.5,
        py: 3
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 0.5, mb: 3 }}>
        <Box
          sx={{
            width: 26,
            height: 26,
            borderRadius: '7px',
            bgcolor: tokens.highlighter,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: tokens.ink,
            fontSize: '0.85rem'
          }}
        >
          U
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: tokens.ink }}>
          Union
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: '#F8F6F0',
          borderRadius: 99,
          px: 2,
          py: 1,
          mb: 3
        }}
      >
        <SearchIcon sx={{ fontSize: 18, color: tokens.graphite }} />
        <InputBase placeholder="Search" sx={{ fontSize: '0.85rem', flex: 1 }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: tokens.graphite, letterSpacing: '0.06em', px: 1.5, mb: 0.5 }}>
          WORKSPACE
        </Typography>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Box
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1.4,
                borderRadius: 2.5,
                bgcolor: isActive ? '#FCEFD0' : 'transparent',
                transition: 'background-color 0.15s ease',
                '&:hover': {
                  bgcolor: isActive ? '#FCEFD0' : 'rgba(0,0,0,0.03)'
                }
              }}
            >
              <Icon sx={{ fontSize: 20, color: isActive ? tokens.ink : tokens.graphite }} />
              <Typography
                sx={{
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? tokens.ink : tokens.graphite
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ flex: 1 }} />

      <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', pt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1, mb: 1.5 }}>
          <Avatar sx={{ bgcolor: tokens.pen, width: 38, height: 38, fontSize: '0.9rem' }}>
            {initial}
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '0.87rem', color: tokens.ink }}>
              {user ? user.name : 'Guest'}
            </Typography>
            <Box
              sx={{
                display: 'inline-block',
                bgcolor: tokens.highlighter,
                color: tokens.ink,
                fontSize: '0.68rem',
                fontWeight: 700,
                px: 1,
                borderRadius: 1,
                mt: 0.3
              }}
            >
              Student
            </Box>
          </Box>
        </Box>
        <Box
          onClick={handleLogout}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1.2,
            borderRadius: 2.5,
            cursor: 'pointer',
            color: '#D9534F',
            '&:hover': { bgcolor: 'rgba(217,83,79,0.08)' }
          }}
        >
          <LogoutIcon sx={{ fontSize: 19 }} />
          <Typography sx={{ fontSize: '0.87rem', fontWeight: 500 }}>Log out</Typography>
        </Box>
      </Box>
    </Box>
  );
}