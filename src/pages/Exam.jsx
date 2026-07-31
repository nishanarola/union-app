import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatWindow from '../components/ChatWindow';

export default function Exam() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const storageKey = `chat_${user?.email || 'guest'}_exam`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: 0 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Exam Study Help
      </Typography>
      <Box sx={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ChatWindow
          initialMessages={[
            { sender: 'ai', text: "Hey! What subject or topic are you studying for right now?" }
          ]}
          storageKey={storageKey}
        />
      </Box>
    </Box>
  );
}