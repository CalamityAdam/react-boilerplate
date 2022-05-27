/** @jest-environment jsdom */
import React from 'react';
import { render, act } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

describe('App', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                name: 'frankie fastfingers',
                url: 'https://pokeapi.co/api/v2/pokemon/1/',
              },
            ],
          }),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('Should render', async () => {
    const promise = Promise.resolve();
    const { baseElement, debug } = render(<App />);
    debug();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeInTheDocument();

    await act(async () => {
      await promise;
    });
  });
});
