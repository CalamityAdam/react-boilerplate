import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Welcome to React Router!</h1>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
