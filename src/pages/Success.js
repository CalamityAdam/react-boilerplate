import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <main>
      <h1>Success!!</h1>

      <Link to="/">Go back home.</Link>
    </main>
  );
}

export { Success };
