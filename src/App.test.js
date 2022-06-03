/** @jest-environment jsdom */
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

describe('App', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [],
          }),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('Should render', async () => {
    await act(async () => {
      render(<App />);
    });

    const appContainer = screen.getByTestId('app');

    expect(appContainer).toBeInTheDocument();
  });
});
