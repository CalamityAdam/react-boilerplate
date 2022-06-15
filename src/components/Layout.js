import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate('/')}>📖 Bookkeeper 📊</h1>

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
