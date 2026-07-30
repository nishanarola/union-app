import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatWindow from '../components/ChatWindow';

export default function Exam() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Exam Study Help
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ChatWindow
          initialMessages={[
            { sender: 'ai', text: "Hey! What subject or topic are you studying for right now?" }
          ]}
        />
      </Box>
    </Box>
  );
}