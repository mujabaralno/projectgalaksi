import React from 'react';
import Loader from './Loader';
import TextTyper from './TypeTyper';

const BotIcon = '/bot.svg';
const UserIcon = '/user.svg';

function ChatMessage({ role, content, isTyping }) {
  return (
    <div className={`wrapper ${role === 'ai' && 'ai'}`}>
      <div className="chat">
        <div className="profile ml-2">
          <img src={role === 'ai' ? BotIcon : UserIcon} alt={role} />
        </div>
        <div className="message">
          {role === 'ai' && isTyping && <Loader />} 
          {role === 'ai' && !isTyping && <TextTyper text={content} />}
          {role === 'user' && <span>{content}</span>}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;