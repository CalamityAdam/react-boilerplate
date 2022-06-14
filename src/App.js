import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='mt-4 mx-auto h-75 w-75'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
