import React, { useState, useEffect } from 'react';
import ChatBox from './pages/ChatBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sampleapp() {
  const [messages, setMessages] = useState([
    { type: 'from', text: 'Hello 👋', time: '14:25' },
    { type: 'to', text: 'Hi there! 😊', time: '14:26' },
  ]);

  // Simulate new messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: Math.random() > 0.5 ? 'from' : 'to',
          text: 'New message ' + (prev.length + 1),
          time: new Date().toLocaleTimeString().slice(0, 5),
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  <input />

  return <ChatBox messages={messages} />;
}

export default Sampleapp;
