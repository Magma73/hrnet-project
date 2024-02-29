import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
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
    <div style={styles.body}>
      <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
          <App />
        </Suspense>
      </Provider>
    </div>
  </React.StrictMode>
);
