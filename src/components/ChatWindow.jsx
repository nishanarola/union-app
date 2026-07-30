import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';

export default function ChatWindow({ initialMessages = [] }) {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    const userMessage = { sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: 0 }}>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          px: 1,
          py: 2,
          minHeight: 0,
          '&::-webkit-scrollbar': {
            width: '6px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,0.15)',
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0,0,0,0.25)'
          }
        }}
      >
        {messages.map((msg, i) => (
          <ChatBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={bottomRef} />
      </Box>

      <Box sx={{ pt: 2, width: '100%' }}>
        <ChatInput onSend={handleSend} />
      </Box>
    </Box>
  );
}