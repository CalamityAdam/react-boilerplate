import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Home } from './pages';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export { App };
