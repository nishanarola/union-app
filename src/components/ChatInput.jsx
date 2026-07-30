import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { tokens } from '../theme';

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        bgcolor: '#F8F6F0',
        borderRadius: 99,
        px: 2,
        py: 1
      }}
    >
      <TextField
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        multiline
        maxRows={4}
        variant="standard"
        InputProps={{ disableUnderline: true }}
        sx={{ fontSize: '0.9rem' }}
      />
      <IconButton
        onClick={handleSend}
        disabled={!message.trim()}
        sx={{
          bgcolor: tokens.pen,
          color: '#FFFFFF',
          '&:hover': { bgcolor: tokens.pen },
          '&.Mui-disabled': { bgcolor: 'rgba(0,0,0,0.08)' }
        }}
      >
        <SendIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}