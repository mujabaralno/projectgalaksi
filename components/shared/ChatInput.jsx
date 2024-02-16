'use client'

import React, { useState } from 'react';

const send = '/up-arrow.svg';
const pause = 'pause.svg'

function ChatInput({ onSubmit }) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);
    setUserInput('');
  };

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <form onSubmit={handleSubmit} className={`form-chat  w-full bg-none border-[2px] border-gray-600 rounded-lg mb-2 ${userInput ? 'border-[#f5f5f5]' : 'border-gray-700'} `}>
        <textarea
          name="prompt"
          rows="1"
          cols="1"
          placeholder="send a message...."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit" className='w-[40px] '>
          <img
            src={send}
            alt="send"
            className={`w-[30px] flex justify-center items-center  py-1 px-1 rounded-full ${userInput ? 'bg-gray-200' : 'bg-gray-500'}`}
          />
        </button>
      </form>
      <div className='w-full flex justify-center items-center mb-2'>
        <p className='text-white text-[12px] sm:flex sm:justify-center sm:items-center'>ChatGPT can make mistakes. Consider checking important information.</p>
      </div>
    </div>
  );
}

export default ChatInput;