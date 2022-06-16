/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { App } from './App';
import { Layout } from './components';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

const mockUseNavigate = jest.fn();

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
  Route: jest.fn().mockImplementation(({ path, element, children }) => (
    <div data-testid='route' data-path={path}>
      {children}
    </div>
  )),
  Routes: jest
    .fn()
    .mockImplementation(({ children }) => (
      <div data-testid='routes'>{children}</div>
    )),
  Outlet: jest.fn().mockImplementation(() => <div data-testid='outlet' />),
  useNavigate: jest.fn().mockImplementation(() => mockUseNavigate),
}));

afterEach(() => {
  jest.clearAllMocks();
});

it('Should render a proper BrowserRouter implementation', () => {
  const { getByTestId } = render(<App />);
  const browserRouterElem = getByTestId('browser-router');
  const routesElem = getByTestId('routes');

  expect(BrowserRouter).toHaveBeenCalled();
  expect(Routes).toHaveBeenCalled();

  expect(getByTestId('browser-router')).toBeInTheDocument();
  expect(routesElem).toBeInTheDocument();

  expect(browserRouterElem).toContainElement(routesElem);
});

it('Layout should render an Outlet component', () => {
  const { getByTestId } = render(<Layout />);

  expect(Outlet).toHaveBeenCalled();
  expect(getByTestId('outlet')).toBeInTheDocument();
});

it('App should render a route with path "/" for Layout component', () => {
  const { getAllByTestId } = render(<App />);

  expect(Route).toHaveBeenCalled();
  expect(getAllByTestId('route')[0]).toBeInTheDocument();
  expect(getAllByTestId('route')[0]).toHaveAttribute('data-path', '/');
});

it('Layout route should contain 2 Route components', () => {
  const { getAllByTestId } = render(<App />);

  expect(Route).toHaveBeenCalledTimes(3);
  expect(getAllByTestId('route')).toHaveLength(3);
  expect(getAllByTestId('route')[1]).toHaveAttribute('data-path', '/invoices');
  expect(getAllByTestId('route')[2]).toHaveAttribute('data-path', '/dashboard');
});

/* BONUS */
it('clicking the heading should call useNavigate returned function with "/"', () => {
  const { getByRole } = render(<Layout />);

  const heading = getByRole('heading', { name: '📖 Bookkeeper 📊' });

  act(() => {
    fireEvent.click(heading);
  });

  expect(useNavigate()).toHaveBeenCalledWith('/');
});
