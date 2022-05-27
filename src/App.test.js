/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

it('should render', () => {
  const { baseElement } = render(<App />);

  expect(baseElement).toBeInTheDocument();
});

it('should render a carousel', () => {
  const { baseElement } = render(<App />);

  expect(baseElement.getElementsByClassName('carousel slide').length).toBe(1);
});

it('should render a carousel with 4 items', () => {
  const { baseElement } = render(<App />);

  expect(baseElement.getElementsByClassName('carousel-item').length).toBe(4);
});

it('each carousel item should have a caption', () => {
  const { baseElement } = render(<App />);

  [...baseElement.getElementsByClassName('carousel-item')].forEach((item) => {
    expect(item.getElementsByClassName('carousel-caption').length).toBe(1);
  });
});
