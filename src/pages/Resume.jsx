import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatWindow from '../components/ChatWindow';

export default function Resume() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: 0 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Resume Builder
      </Typography>
      <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ChatWindow
          initialMessages={[
            { sender: 'ai', text: "Share your current resume details or ask me anything about improving it!" }
          ]}
        />
      </Box>
    </Box>
  );
}