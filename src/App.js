import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='mt-4 mx-auto h-75 w-75'>
        <Routes>
          {/* Route components here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
