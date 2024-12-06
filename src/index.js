import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './styles/reset.css';
import './styles/main.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
