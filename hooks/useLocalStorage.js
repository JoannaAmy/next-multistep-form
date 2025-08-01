'use client';

import { useEffect, useState } from "react";

export const useLocalStorage = (key, intialValue) => {
    
  const getInitialValue = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : intialValue;
  };

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
