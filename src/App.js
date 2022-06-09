import React, { useState, useEffect } from 'react';

function App() {
  const [fact, setFact] = useState('');

  const fetchFact = () => {
    fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
      .then((res) => res.json())
      .then((data) => setFact(data.text));
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <header className='masthead d-flex align-items-center'>
      <div className='container px-lg-5 text-center'>
        <h1 className='mb-5 text-shadow'>{fact}</h1>
        <button className='btn btn-primary btn-xl' onClick={fetchFact}>
          Find Out More
        </button>
      </div>
    </header>
  );
}

export { App };
