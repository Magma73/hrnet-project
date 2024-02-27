import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading</div>}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
