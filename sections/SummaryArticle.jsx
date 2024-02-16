'use client'

const API_URL = process.env.NEXT_PUBLIC_SUMMARY_ARTICLE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUMMARY_TEXT_APIKEY;
const API_HOST = process.env.NEXT_PUBLIC_SUMMARY_ARTICLE_HOST;

import React, { useState, useEffect } from 'react';
import ChatMessage from '@/components/shared/ChatMessage';
import ChatInput from '@/components/shared/ChatInput';


const BotIcon = '/bot.svg';
const UserIcon = '/user.svg';
const send = '/up-arrow.svg';

function SummaryArticle() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
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

      const response = await fetch(`${API_URL}/summarize?url=${userInput}&length=3`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST,
        },
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim pesan');
      }

      const data = await response.json();

      setChatMessages(prevMessages => [
        ...prevMessages,
        { role: 'user', content: userInput },
        { role: 'ai', content: data.summary },
      ]);

    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      setIsTyping(false);
      setUserInput('');
    }
  };

  return (
    <div id="app" className='relative h-full w-full transition-width bg-[#101720] flex flex-col overflow-hidden items-stretch flex-1'>
      
      <div id="chat_container">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} role={message.role} content={message.content} isTyping={message.isTyping} />
        ))}
      </div>

      <ChatInput onSubmit={handleSubmit} />

    </div>
  
  );
}

export default SummaryArticle;