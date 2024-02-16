'use client'

import React, { useEffect, useState } from 'react';

function Loader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        return prevDots.length === 3 ? '' : prevDots + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>{dots}</span>;
}

export default Loader;