/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { App } from './App';

const Carousel = ({ children }) => (
  <>
    <div data-testid='carousel'>{children}</div>
  </>
);
const Item = ({ children }) => (
  <>
    <div data-testid='item'>{children}</div>
  </>
);
const Caption = ({ children }) => (
  <>
    <div data-testid='caption'>{children}</div>
  </>
);
Carousel.Item = Item;
Carousel.Caption = Caption;

jest.mock('react-bootstrap', () => ({ Carousel }));

describe('Carousel component', () => {
  it('should render', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeInTheDocument();
  });

  it('should render a carousel', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('carousel')).toBeInTheDocument();
  });
});

describe('Carousel.Item component', () => {
  it('should render a carousel with 4 items', () => {
    const { getAllByTestId } = render(<App />);

    expect(getAllByTestId('item').length).toBe(4);
  });
});

describe('Carousel.Caption component', () => {
  it('each carousel item should have a caption', () => {
    const { getAllByTestId } = render(<App />);

    expect(getAllByTestId('caption').length).toBe(4);
  });
});

it('each item should have a p and h3', () => {
  const { getByRole } = render(<App />);
  
    expect(getByRole('heading', { name: /^Dopey$/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /^Grumpy$/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /^Sleepy$/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /^Sneezy$/i })).toBeInTheDocument();
});
