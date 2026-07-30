import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: '#EDEAE0',
        p: 2,
        gap: 2
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}
      >
        <Sidebar />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <Box
          sx={{
            flex: 1,
            bgcolor: '#FFFFFF',
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            p: 4,
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