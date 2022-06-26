/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { App, Button } from './App';

/**
 * Verify something should render
 */
it('should render', () => {
  // use screen to find element
  render(<App />);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});

it('Button should render', () => {
  // use return from render
  const { baseElement } = render(<Button />);

  expect(baseElement).toBeInTheDocument();
});

it('Button should render text', () => {
  // use getByText returned from render
  const { getByText } = render(<Button label='click me' />);

  expect(getByText('click me')).toBeInTheDocument();
});

it('Button should render text', () => {
  // use snapshot to verify render
  const { baseElement } = render(<Button label='submit' />);

  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <button>
          submit
        </button>
      </div>
    </body>
  `);
});

/**
 * Verify a callback is called
 */
it('Button should call callback', () => {
  const callback = jest.fn();
  const { getByText } = render(<Button label='click me' onClick={callback} />);

  const button = getByText('click me');
  fireEvent.click(button);

  expect(callback).toHaveBeenCalled();
});

/**
 * verify page is updated when button is clicked
 */
function RenderButton() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button label='Click me' onClick={() => setCount(count + 1)} />
    </div>
  );
}

it('Button should update page', () => {
  const { getByText } = render(<RenderButton />);

  const button = getByText('Click me');
  fireEvent.click(button);

  expect(getByText('You clicked 1 times')).toBeInTheDocument();
});
