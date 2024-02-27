import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const styles = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    WebkitFontSmoothing: 'antialiased',
  },
  code: {
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading</div>}>
          <App style={styles} />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
