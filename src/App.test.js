/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

it('renders', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello, world/i);
  expect(linkElement).toBeInTheDocument();
})
