/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

jest.mock(
  '@mui/material/Accordion',
  () =>
    function Accordion({ children }) {
      return <div data-testid='accordion'>{children}</div>;
    }
);
jest.mock(
  '@mui/material/AccordionDetails',
  () =>
    function AccordionDetails({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock(
  '@mui/material/AccordionSummary',
  () =>
    function AccordionSummary({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock(
  '@mui/material/Box',
  () =>
    function Box({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock(
  '@mui/material/Container',
  () =>
    function Container({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock(
  '@mui/icons-material/ExpandMore',
  () =>
    function ExpandMore({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock(
  '@mui/material/TextField',
  () =>
    function TextField({ children, ...rest }) {
      return (
        <input type='text' role='textbox' data-testid='textbox' {...rest}>
          {children}
        </input>
      );
    }
);
jest.mock(
  '@mui/material/Typography',
  () =>
    function Typography({ children }) {
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

describe('Entering a place name', () => {
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

  it('should filter the list of places', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getAllByTestId('accordion').length).toBe(2);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'chicago',
      },
    });

    expect(screen.getAllByTestId('accordion').length).toBe(1);
  });
});
