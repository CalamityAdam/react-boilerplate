import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main>
      <h1>About</h1>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </main>
  );
}

export { About };
