/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { App } from './App';
import { Home, About } from './pages';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  BrowserRouter: jest
    .fn()
    .mockImplementation(({ children }) => (
      <div data-testid='browser-router'>{children}</div>
    )),
  Link: jest.fn().mockImplementation(({ children, to, ...props }) => (
    <a data-testid='link' data-to={to} {...props}>
      {children}
    </a>
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

it('Should render a proper BrowserRouter implementation', () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  const browserRouterElem = getByTestId('browser-router');
  const routesElem = getByTestId('routes');
  const routeElem = getAllByTestId('route')[0];

  expect(BrowserRouter).toHaveBeenCalled();
  expect(Routes).toHaveBeenCalled();
  expect(Route).toHaveBeenCalled();

  expect(getByTestId('browser-router')).toBeInTheDocument();
  expect(routesElem).toBeInTheDocument();
  expect(routeElem).toBeInTheDocument();

  expect(browserRouterElem).toContainElement(routesElem);
  expect(routesElem).toContainElement(routeElem);
  expect(browserRouterElem).toContainElement(routeElem);

  expect(Route.mock.calls[0][0].path).toBe('/');
  expect(Route.mock.calls[1][0].path).toBe('/about');
  expect(getAllByTestId('route')).toHaveLength(2);
});

it('About should render a Link component', () => {
  const { getByTestId } = render(<About />);

  expect(Link).toHaveBeenCalled();
  expect(getByTestId('link')).toBeInTheDocument();
});

it('About nav link should point to Home', () => {
  const { getByTestId } = render(<About />);

  const linkElem = getByTestId('link');
  expect(linkElem.dataset['to']).toBe('/');
});

it('Home should render a Link component', () => {
  const { getByTestId } = render(<Home />);

  expect(Link).toHaveBeenCalled();
  expect(getByTestId('link')).toBeInTheDocument();
});

it('Home nav link should point to About', () => {
  const { getByTestId } = render(<Home />);

  const linkElem = getByTestId('link');
  expect(linkElem.dataset['to']).toBe('/about');
});
