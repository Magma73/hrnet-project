// import React, { Suspense, lazy } from 'react';
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route } from 'react-router-dom';
// import Root from './routes/root';
import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
// import EmployeeList from './pages/EmployeeList';

const EmployeeList = lazy(() => import('./pages/EmployeeList'));
// const Error = lazy(() => import('./pages/Error'));

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'employeelist',
//         element: <EmployeeList />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <Error />,
  },
  {
    path: '/employeelist',
    // async lazy() {
    //   let { EmployeeList } = await import("./pages/EmployeeList");
    //   return { Component: EmployeeList };
    // },
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <EmployeeList />
      </Suspense>
    ),
    // errorElement: <Error />,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="" element={<Home />} />
//       <Route path="employeelist" lazy={() => import("./pages/EmployeeList")}  />
//     </Route>
//   )
// );

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  // <div>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route
  //       path="employeelist"
  //       element={
  //         <React.Suspense fallback={<>...</>}>
  //           <EmployeeList />
  //         </React.Suspense>
  //       }
  //     />
  //     <Route path="*"
  //       element={
  //         <React.Suspense fallback={<>...</>}>
  //           <Error />
  //         </React.Suspense>
  //       } />

  //   </Routes>
  // </div>

}