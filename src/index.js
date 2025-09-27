import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import favicon from './Assets/Header/logo_black.png';

const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(<App />);
