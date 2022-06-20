import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='layout'>
      <h1>Theme provider</h1>
      <h2>
        Currently using <strong>{theme}</strong> mode
      </h2>
      <button
        onClick={toggleTheme}
        className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}
      >
        Toggle theme
      </button>
      <p className="mt-2">
        Explore the code on{' '}
        <a href='https://github.com/CalamityAdam/dark-mode-toggle'>Github</a>.
      </p>
    </div>
  );
}

export { App };
