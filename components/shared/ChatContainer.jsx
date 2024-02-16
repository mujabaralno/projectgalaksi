// Contoh komponen ChatContainer.jsx
import React from 'react';

const ChatContainer = ({ messages }) => {

  const reversedMessages = messages ? messages.slice().reverse() : [];

  return (
    <div>
      {reversedMessages.map((message, index) => (
        <div key={index}>
          {message.role === 'user' && <div>User: {message.content}</div>}
          {message.role === 'ai' && <div>AI: {message.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
