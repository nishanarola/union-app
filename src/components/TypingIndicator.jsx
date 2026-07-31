import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { keyframes } from '@mui/system';
import { tokens } from '../theme';

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-5px); opacity: 1; }
`;

export default function TypingIndicator() {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', mb: 2, gap: 1.25 }}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          flexShrink: 0,
          bgcolor: tokens.highlighter,
          fontSize: '0.85rem'
        }}
      >
        AI
      </Avatar>

      <Box
        sx={{
          bgcolor: '#EDEAE0',
          px: 2.25,
          py: 1.5,
          borderRadius: '18px',
          borderTopLeftRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: 0.6
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              bgcolor: tokens.graphite,
              animation: `${bounce} 1.2s infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </Box>
    </Box>
  );
}