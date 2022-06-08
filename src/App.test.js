/** @jest-environment jsdom */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';

it('App should be a class component', () => {
  expect(App.prototype.isReactComponent).toBeTruthy();
});

it('Entering a price should update total', () => {
  const { getByRole, getByTestId } = render(<App />);

  const priceInput = getByRole('spinbutton', { name: 'price' });
  const total = getByTestId('total');

  expect(priceInput).toBeInTheDocument();
  expect(total).toBeInTheDocument();

  fireEvent.change(priceInput, { target: { value: 100 } });

  expect(total.textContent).toBe('$120.00');
});

it('Selecting a tip percent should update total', () => {
  const { getByRole, getByTestId } = render(<App />);

  const priceInput = getByRole('spinbutton', { name: 'price' });
  const taxSelect = getByRole('combobox', { name: 'tip' });
  const total = getByTestId('total');
  
  fireEvent.change(priceInput, { target: { value: 100 } });
  
  expect(total.textContent).toBe('$120.00');
  
  fireEvent.change(taxSelect, { target: { value: 0.15 } });
  
  expect(total.textContent).toBe('$115.00');
});

it('Selecting a tip percent should update tip amount', () => {
  const { getByRole, getByTestId } = render(<App />);
  
  const priceInput = getByRole('spinbutton', { name: 'price' });
  const taxSelect = getByRole('combobox', { name: 'tip' });
  const tip = getByTestId('tip');
  const total = getByTestId('total');
  
  fireEvent.change(priceInput, { target: { value: 100 } });
  
  expect(total.textContent).toBe('$120.00');
  expect(tip.textContent).toBe('$20.00');
  
  fireEvent.change(taxSelect, { target: { value: 0.15 } });
  
  expect(total.textContent).toBe('$115.00');
  expect(tip.textContent).toBe('$15.00');
});
