import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>📖 Bookkeeper 📊</h1>

      <nav>
        <Link to='invoices'>Invoices</Link> |{' '}
        <Link to='dashboard'>Dashboard</Link>
      </nav>

      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
