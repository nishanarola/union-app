import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { tokens } from '../theme';

export default function ChatBubble({ sender, text }) {
  const isUser = sender === 'user';

  const avatar = (
    <Avatar
      sx={{
        width: 32,
        height: 32,
        flexShrink: 0,
        bgcolor: isUser ? tokens.pen : tokens.highlighter,
        fontSize: '0.85rem'
      }}
    >
      {isUser ? 'U' : 'AI'}
    </Avatar>
  );

  const bubble = (
    <Box
      sx={{
        maxWidth: '70%',
        minWidth: 40,
        bgcolor: isUser ? tokens.pen : '#EDEAE0',
        color: isUser ? '#FFFFFF' : tokens.ink,
        px: 2.25,
        py: 1.1,
        borderRadius: '18px',
        borderTopRightRadius: isUser ? '6px' : '18px',
        borderTopLeftRadius: isUser ? '18px' : '6px'
      }}
    >
      <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.5, wordBreak: 'break-word' }}>
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 2,
        gap: 1.25
      }}
    >
      {isUser ? (
        <>
          {bubble}
          {avatar}
        </>
      ) : (
        <>
          {avatar}
          {bubble}
        </>
      )}
    </Box>
  );
}