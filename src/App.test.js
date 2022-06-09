/** @jest-environment jsdom */
import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

it('App should be a class component', () => {
  expect(App.prototype.isReactComponent).toBeTruthy();
});

describe('', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            text: 'Mitochondria is the powerhouse of the cell.',
          }),
      });
    });
  });

  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('When App renders it should fetch a quote', async () => {
    await act(() => {
      render(<App />);
    });

    expect(window.fetch).toHaveBeenCalled();
    expect(
      screen.getByText('Mitochondria is the powerhouse of the cell.')
    ).toBeInTheDocument();
  });

  it('Clicking the button should fetch a new quote', async () => {
    await act(() => {
      render(<App />);
    });
    const button = screen.getByRole('button', { name: 'Find Out More' });

    await act(() => {
      fireEvent.click(button);
    });

    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(
      screen.getByText('Mitochondria is the powerhouse of the cell.')
    ).toBeInTheDocument();
  });
});
