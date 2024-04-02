import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const Error = lazy(() => import('./pages/Error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/employeelist',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <EmployeeList />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading</div>}>
        <Error />
      </Suspense>
    )
  },
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}