import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Success } from './pages';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div className='mt-4 mx-auto h-75 w-75'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  </div>
);
