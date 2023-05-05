import React from 'react';
import ReactDOM from 'react-dom/client';
import { Finish } from './view/pages/finish';
//import { TypingTest } from './view/pages/typingTest';
//import { Start } from './view/pages/start';
//import { GetReady } from './view/pages/getReady';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Finish/>
  </React.StrictMode>
);
