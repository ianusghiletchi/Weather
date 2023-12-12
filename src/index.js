import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './scss/style.scss';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

