'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [pageTheme, setPageTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      setPageTheme(savedTheme);
      // document.body.classList.add(savedTheme)
      document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark');
    } else {
      const darkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (darkMode) {
        setPageTheme('dark');
        document.body.classList.add('dark');
        localStorage.setItem('selected-theme', 'dark');
      } else {
        setPageTheme('light');
        localStorage.setItem('selected-theme', 'light');
      }
    }
  }, []);

  const getCurrentTheme = () =>
    document.body.classList.contains('dark') ? 'dark' : 'light';

  const toggleTheme = () => {
    const newTheme = pageTheme !== 'dark' ? 'dark' : 'light';
    setPageTheme(newTheme);
    document.body.classList.toggle('dark');
    localStorage.setItem('selected-theme', getCurrentTheme());
  };

  return (
    <ThemeContext.Provider value={{ pageTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
