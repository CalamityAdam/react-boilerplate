import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Dashboard, Invoices } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='mt-4 mx-auto h-75 w-75'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/invoices' element={<Invoices />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
