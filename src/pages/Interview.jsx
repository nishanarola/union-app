import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatWindow from '../components/ChatWindow';

export default function Interview() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const storageKey = `chat_${user?.email || 'guest'}_interview`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: 0 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        AI Mock Interview
      </Typography>
      <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ChatWindow
          initialMessages={[
            { sender: 'ai', text: "Hi! I'm your mock interviewer. Ready to practice? Tell me which role you're preparing for." }
          ]}
          storageKey={storageKey}
        />
      </Box>
    </Box>
  );
}