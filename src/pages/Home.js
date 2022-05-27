import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Home</h1>

      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </main>
  );
}

export { Home };
