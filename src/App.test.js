/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  BrowserRouter: jest
    .fn()
    .mockImplementation(({ children }) => (
      <div data-testid='browser-router'>{children}</div>
    )),
  Route: jest.fn().mockImplementation(({ path, element }) => (
    <div data-testid='route' data-path={path}>
      {element}
    </div>
  )),
  Routes: jest
    .fn()
    .mockImplementation(({ children }) => (
      <div data-testid='routes'>{children}</div>
    )),
}));

afterEach(() => {
  jest.clearAllMocks();
});

it('Should render a BrowserRouter Component', () => {
  const { getByTestId } = render(<App />);

  expect(BrowserRouter).toHaveBeenCalled();
  expect(getByTestId('browser-router')).toBeInTheDocument();
});

it('Should render a Routes component', () => {
  const { getByTestId } = render(<App />);

  const browserRouterElem = getByTestId('browser-router');
  const routesElem = getByTestId('routes');

  expect(Routes).toHaveBeenCalled();
  expect(routesElem).toBeInTheDocument();
  expect(browserRouterElem).toContainElement(routesElem);
});

it('Should render a Route Components', () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  const browserRouterElem = getByTestId('browser-router');
  const routesElem = getByTestId('routes');
  const routeElem = getAllByTestId('route')[0];

  expect(Route).toHaveBeenCalled();
  expect(Route.mock.calls[0][0].path).toBe('/');
  expect(routeElem).toBeInTheDocument();
  expect(routesElem).toContainElement(routeElem);
  expect(browserRouterElem).toContainElement(routeElem);
});

it('Should render 2 Route Components', () => {
  const { getAllByTestId } = render(<App />);

  expect(Route).toHaveBeenCalledTimes(2);
  expect(getAllByTestId('route')).toHaveLength(2);
});
