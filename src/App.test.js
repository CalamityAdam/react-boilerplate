/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

jest.mock('@mui/material');
jest.mock(
  '@mui/icons-material/ExpandMore',
  () =>
    function ExpandMore({ children }) {
      return <div>{children}</div>;
    }
);

describe('Accordion component with a single place', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              name: 'Chicago',
              population: '2671640',
              state: 'Il',
            },
          ]),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('should render', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(window.fetch).toHaveBeenCalledWith('https://gist.githubusercontent.com/CalamityAdam/914dc118289b4b40f1f2adeacc8c445e/raw/57870057da789cfcbaa59f63b3718ac7e5e69008/cities.json');
    expect(screen.getByTestId('accordion')).toBeInTheDocument();
  });

  it('should render a single accordion', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion')[0]).toBeInTheDocument();
  });
});

describe('Accordion component with multiple places', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              name: 'Chicago',
              population: '2671640',
              state: 'Il',
            },
            {
              name: 'Los Angeles',
              population: '3985520',
              state: 'Ca',
            },
          ]),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('should render multiple accordions', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion').length).toBe(2);
  });
});

describe('Accordion component with many many places', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              rank: 11,
              name: 'San Jose',
              state: 'CA',
              population: 1003120,
            },
            {
              rank: 12,
              name: 'Fort Worth',
              state: 'TX',
              population: 958692,
            },
            {
              rank: 13,
              name: 'Jacksonville',
              state: 'FL',
              population: 938717,
            },
            {
              rank: 14,
              name: 'Charlotte',
              state: 'NC',
              population: 925290,
            },
            {
              rank: 15,
              name: 'Columbus',
              state: 'OH',
              population: 921605,
            },
            {
              rank: 16,
              name: 'Indianapolis',
              state: 'IN',
              population: 892656,
            },
          ]),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('should render multiple accordions', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion').length).toBe(6);
  });
});

describe('Accordion content', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              name: 'Chicago',
              population: '2671640',
              state: 'Il',
            },
            {
              name: 'Los Angeles',
              population: '3985520',
              state: 'Ca',
            },
          ]),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('should render dynamically', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(
      screen.getByText(/Chicago has a population of 2671640/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Los Angeles has a population of 3985520/)
    ).toBeInTheDocument();
  });
});

describe('Entering a place name', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              rank: 1,
              name: 'New York City',
              state: 'NY',
              population: 8177020,
            },
            {
              rank: 2,
              name: 'Los Angeles',
              state: 'CA',
              population: 3985520,
            },
            {
              rank: 3,
              name: 'Chicago',
              state: 'IL',
              population: 2671640,
            },
          ]),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('should filter the list of places by city', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion').length).toBe(3);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'chicago',
      },
    });

    expect(screen.getAllByTestId('accordion').length).toBe(1);
  });

  it('should filter the list of places by state', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion').length).toBe(3);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'ny',
      },
    });

    expect(screen.getAllByTestId('accordion').length).toBe(1);
  });
});
