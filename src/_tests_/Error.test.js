/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';
import App from '../App';

afterEach(() => {
  cleanup();
});

describe('Given I visit the application', () => {
  describe('When the Home page is not found', () => {
    test('Then, it should render the error page', async () => {
      const router = createBrowserRouter([
        {
          path: '/home',
          element: null, // Render nothing to simulate Home page not found
          errorElement: <Error />, // Render the Error page component
        },
      ]);

      render(
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>}>
          <App />
        </RouterProvider>
      );

      // Check for the title to Home Page
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      expect(mainHeading).toHaveTextContent('Error Page');

      // Check for the link to Home Page
      const viewHomePageLink = screen.getByRole('link', { name: /Back to Home Page/i });
      expect(viewHomePageLink).toBeInTheDocument();
      expect(viewHomePageLink).toHaveAttribute('href', '/');
    });
  });

  describe('When the EmployeeList page is not found', () => {
    test('Then, it should render the error page', async () => {
      const router = createBrowserRouter([
        {
          path: '/employeelist',
          element: null,
          errorElement: <Error />,
        },
      ]);

      render(
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>}>
          <App />
        </RouterProvider>
      );

      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      expect(mainHeading).toHaveTextContent('Error Page');

      const viewHomePageLink = screen.getByRole('link', { name: /Back to Home Page/i });
      expect(viewHomePageLink).toBeInTheDocument();
      expect(viewHomePageLink).toHaveAttribute('href', '/');
    });
  });
});
