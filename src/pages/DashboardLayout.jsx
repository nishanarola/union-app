import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: '#EDEAE0',
        p: { xs: 0, md: 2 },
        gap: { xs: 0, md: 2 }
      }}
    >
      {/* Desktop sidebar — always visible */}
      {!isMobile && (
        <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <Sidebar />
        </Box>
      )}

      {/* Mobile sidebar — slides in as a Drawer */}
      {isMobile && (
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </Drawer>
      )}

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        {/* Mobile top bar with hamburger */}
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1.5, bgcolor: '#FFFFFF' }}>
            <IconButton onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            bgcolor: '#FFFFFF',
            borderRadius: { xs: 0, md: 4 },
            boxShadow: { xs: 'none', md: '0 4px 20px rgba(0,0,0,0.04)' },
            p: { xs: 2.5, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minHeight: 0
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}