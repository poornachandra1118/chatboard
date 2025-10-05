import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
function Scrollbarchat() {
    const [messages, setMessages] = useState([
        { type: 'from', text: 'Hello 👋', time: '14:25' },
        { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        { type: 'from', text: 'Hello 👋', time: '14:25' },
        { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        { type: 'from', text: 'Hello 👋', time: '14:25' },
        { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        { type: 'from', text: 'Hello 👋', time: '14:25' },
        { type: 'to', text: 'Hi there! 😊', time: '14:26' },
      ]);
  const messagesEndRef = useRef(null);

  // 👇 Auto-scroll when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="container mt-4">
      <div
        className="overflow-auto border rounded p-3"
        style={{ height: '300px', backgroundColor: '#f8f9fa' }}
      >
        <ul className="list-unstyled mb-0">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`d-flex mb-2 ${
                msg.type === 'from' ? 'justify-content-start' : 'justify-content-end'
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.type === 'from' ? 'bg-light text-dark' : 'bg-primary text-white'
                }`}
                style={{ maxWidth: '70%' }}
              >
                <div>{msg.text}</div>
                <small className="text-muted">{msg.time}</small>
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </div>
  );
}

export default Scrollbarchat;
