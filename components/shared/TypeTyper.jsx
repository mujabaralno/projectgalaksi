'use client'

import React, { useEffect, useState } from 'react';

const TextTyper = ({ text }) => {
  const [typedText, setTypedText] = useState(''); 

  useEffect(() => {
    let index = 0;
    const timePerCharacter = 12; 

    const interval = setInterval(() => {
      if (text && index < text.length) {
        setTypedText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, timePerCharacter);
  
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {typedText}
      
    </span>
  );
};

export default TextTyper;
