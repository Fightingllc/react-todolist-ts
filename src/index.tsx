/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:10:31
 * @LastEditTime: 2022-08-22 14:14:07
 * @FilePath: \react-todolist-ts\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
