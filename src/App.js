import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    // here we would do something like submit the form data to the API

    navigate('/success');
  }

  return (
    <main>
      <h1>Enter any value to succeed.</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Favorite Color
          <input name="favorite-color" type="text" id="favorite-color-input" />
        </label>
        <button type="submit">submit</button>
      </form>
    </main>
  );
}

export { App };
