// ThemeContext.ts
import React from 'react';

export const themes = {
 light: {
   foreground: '#ffffff',
   background: '#eeeeee',
   text: '#000000',
 },
 dark: {
   foreground: '#333333',
   background: '#222222',
   text: '#ffffff'
 },
};

export const ThemeContext = React.createContext(themes.light);