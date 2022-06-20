/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';
import { ThemeProvider } from './ThemeProvider';

function renderApp() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

it('should render', () => {
  const { baseElement } = renderApp();

  expect(baseElement).toBeInTheDocument();
});

it('should render light mode by default', () => {
  const { baseElement } = renderApp();

  expect(baseElement).toHaveStyle({ color: '#333', backgroundColor: '#FFF' });
});

it('clicking the button should toggle the theme', () => {
  const { getByRole, baseElement } = renderApp();

  expect(baseElement).toHaveStyle({ color: '#333', backgroundColor: '#FFF' });

  fireEvent.click(getByRole('button'));

  expect(baseElement).toHaveStyle({ color: '#FFF', backgroundColor: '#333' });
});

it('clicking the button should toggle the text', () => {
  const { getByRole, getByText } = renderApp();

  expect(getByText(/Currently using/i)).toHaveTextContent(
    'Currently using light mode'
  );

  fireEvent.click(getByRole('button'));

  expect(getByText(/Currently using/i)).toHaveTextContent(
    'Currently using dark mode'
  );
});
