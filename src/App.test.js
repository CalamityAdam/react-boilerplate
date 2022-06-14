/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { act, render, fireEvent } from '@testing-library/react';
import { App } from './App';
import { useNavigate } from 'react-router-dom';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn().mockImplementation(() => mockUseNavigate),
}));

afterEach(() => {
  jest.clearAllMocks();
});

it('Submitting the form should call useNavigate', () => {
  const { getByRole } = render(<App />);

  const button = getByRole('button', { name: 'submit' });

  act(() => {
    fireEvent.click(button);
  });

  expect(useNavigate()).toHaveBeenCalled();
});

it('useNavigate should be called with "/success"', () => {
  const { getByRole } = render(<App />);

  const button = getByRole('button', { name: 'submit' });

  act(() => {
    fireEvent.click(button);
  });

  expect(useNavigate()).toHaveBeenCalledWith('/success');
});
