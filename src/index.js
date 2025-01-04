import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { globalStyles } from './styles/globalStyles';
import App from './App';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);