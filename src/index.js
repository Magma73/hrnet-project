import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';
import Header from './components/Header';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// const Home = lazy(() => import('./pages/Home'));
// const EmployeeList = lazy(() => import('./pages/EmployeeList'));
// const Error = lazy(() => import('./pages/Error'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          {/* <Suspense fallback={<Loading />}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {/* </Suspense> */}
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
