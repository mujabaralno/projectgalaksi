'use client'

import React, { useState, useEffect } from 'react';
import ChatMessage from '@/components/shared/ChatMessage';  
import ChatInput from '@/components/shared/ChatInput';  
import { sendMessageToAPI } from '@/app/api/chatgpt/api';  

function ChatGPT() {
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

   useEffect(() => {
    const lastMessage = chatMessages[chatMessages.length - 1];
    if (lastMessage && lastMessage.role === 'ai' && isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);

      return () => clearTimeout(typingTimeout);
    }
  }, [chatMessages, isTyping]);

  const handleSubmit = async (userInput) => {
    try {
      setIsTyping(true); 
  
      const aiAnswer = await sendMessageToAPI({
        messages: [{ role: 'user', content: userInput }],
        systemPrompt: '',
        temperature: 0.9,
        topK: 5,
        topP: 0.9,
        maxTokens: 500,
        webAccess: false,
      });
  
      setIsTyping(false); 
  
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: userInput },
        { role: 'ai', content: aiAnswer },
      ]);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setIsTyping(false);
    }
  };

  return (
    <div id="app" className='relative max-h-screen w-full transition-width bg-[#101720] flex flex-col overflow-hidden items-stretch flex-1'>

      <div id="chat_container">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} role={message.role} content={message.content} isTyping={message.isTyping} />
        ))}
      </div>

      <ChatInput onSubmit={handleSubmit} />

    </div>
  );
}

export default ChatGPT;
