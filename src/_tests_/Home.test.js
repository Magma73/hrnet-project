/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

let router;

beforeEach(() => {
  router = createMemoryRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
});

// afterEach(() => {
//   cleanup();
// });

describe('Given I am on the Home Page', () => {
  test('Then it should show title', async () => {
    render(<RouterProvider router={router} />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    await waitFor(() => expect(headingElement).toBeInTheDocument());
    expect(headingElement).toHaveTextContent('HR Net');

    const subTitleElement = screen.getByRole('heading', { level: 2 });
    expect(subTitleElement).toBeInTheDocument();
    expect(subTitleElement).toHaveTextContent('Create Employee');

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('View Current Employees');
  });
  // test('Then it should show subtitle', async () => {
  //   render(<RouterProvider router={router} />);
  //   const subTitleElement = screen.getByRole('heading', { level: 2 });
  //   expect(subTitleElement).toBeInTheDocument();
  //   expect(subTitleElement).toHaveTextContent('Create Employee');
  // });
});
