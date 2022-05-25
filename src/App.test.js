/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

it('should render', () => {
  const { baseElement } = render(<App />);

  expect(baseElement).toBeInTheDocument();
});
