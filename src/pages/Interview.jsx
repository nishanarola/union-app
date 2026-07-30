import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatWindow from '../components/ChatWindow';

export default function Interview() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        AI Mock Interview
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ChatWindow
          initialMessages={[
            { sender: 'ai', text: "Hi! I'm your mock interviewer. Ready to practice? Tell me which role you're preparing for." }
          ]}
        />
      </Box>
    </Box>
  );
}