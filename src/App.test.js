/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Greeting } from './Greeting';

it('App should be a class component', () => {
  expect(App.prototype.isReactComponent).toBeTruthy();
});

it('App should render "hello, dave" in an h1', () => {
  const { getByRole } = render(<App />);

  const heading = getByRole('heading', { name: 'hello, dave' });

  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe('H1');
});

it('Greeting should be a class component', () => {
  expect(Greeting.prototype.isReactComponent).toBeTruthy();
});

it('Greeting should render any name', () => {
  const { getByText } = render(<Greeting name='dave' />);
  const { getByText: getByText2 } = render(<Greeting name='froderik' />);

  const greeting = getByText('hello, dave');
  const greeting2 = getByText2('hello, froderik');

  expect(greeting).toBeInTheDocument();
  expect(greeting.tagName).toBe('H1');
  expect(greeting2).toBeInTheDocument();
  expect(greeting2.tagName).toBe('H1');
});
