import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const EmployeeList = lazy(() => import('./pages/EmployeeList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/employeelist',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <EmployeeList />
      </Suspense>
    ),
  },
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}