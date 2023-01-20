import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderLayout from './components/layouts/headerLayout/HeaderLayout';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeaderLayout>
      <App />
    </HeaderLayout>
);
