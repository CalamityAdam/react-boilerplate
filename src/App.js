import React from 'react';

export function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

export function App() {
  return (
    <div className='container'>
      <h1>hello world</h1>
      <p>welcome to react</p>

      <Button label='hi' />
    </div>
  );
}
