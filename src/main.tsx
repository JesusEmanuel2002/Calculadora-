import React from 'react';
import ReactDOOM from 'react-dom/client';
import Calculator from './Calculator.tsx';
//import './index.css'

ReactDOOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
