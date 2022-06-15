import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>📖 Bookkeeper 📊</h1>

      <nav>
        <Link to='invoices'>Invoices</Link> |{' '}
        <Link to='dashboard'>Dashboard</Link>
      </nav>

      <div className='content'>
        {/* outlet here */}
      </div>
    </div>
  );
}

export { Layout };
